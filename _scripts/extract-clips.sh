#!/usr/bin/env bash
# precise_godzilla_shots.sh
# Detect scene cuts and export the first 10 shots with exact cut boundaries.

set -euo pipefail

# --- Inputs ---
SRC="/Users/mk/Desktop/godzilla.mp4"
OUTDIR="/Users/mk/Development/gened-1145/public/videos/godzilla"
SHOT_COUNT=10                 # number of segments wanted (first 10 shots)
START_THRESH=0.40             # starting scene threshold
MIN_THRESH=0.10               # lowest threshold to try
THRESH_STEPS=(0.40 0.35 0.30 0.25 0.20 0.15 0.10)

mkdir -p "$OUTDIR"

CUTS_FILE="$(mktemp -t godzilla_cuts.XXXXXX.txt)"
TIMES_FILE="$(mktemp -t godzilla_times.XXXXXX.txt)"
trap 'rm -f "$CUTS_FILE" "$TIMES_FILE"' EXIT

need_cuts=$((SHOT_COUNT - 1))

detect_cuts () {
  local thresh="$1"
  : > "$CUTS_FILE"

  # Use ffmpeg + select(show scene changes) + showinfo; parse pts_time from stderr.
  # This is very reliable across ffmpeg builds on macOS.
  ffmpeg -hide_banner -nostats -loglevel info -i "$SRC" \
    -filter:v "select='gt(scene,$thresh)',showinfo" -f null - 2>&1 \
    | awk -F'pts_time:' '/showinfo/ && /pts_time:/ {
        split($2, a, " ");
        if (a[1] ~ /^[0-9.]+$/) print a[1];
      }' > "$CUTS_FILE" || true

  # Count lines (cuts found)
  local found
  if [[ -s "$CUTS_FILE" ]]; then
    found=$(grep -c . "$CUTS_FILE" || true)
  else
    found=0
  fi
  echo "$found"
}

found=0
chosen_thresh="$START_THRESH"

for t in "${THRESH_STEPS[@]}"; do
  echo "Detecting cuts at threshold=$t …"
  found="$(detect_cuts "$t")"
  echo "  -> found $found cut(s)"
  chosen_thresh="$t"
  if (( found >= need_cuts )); then
    break
  fi
done

if (( found == 0 )); then
  echo "Warning: No cuts detected even at low threshold ($chosen_thresh)."
  echo "I’ll export only the first shot (whole input as one segment)."
fi

# Decide how many cut times to use (never call head when count is 0).
use_cuts=$found
if (( use_cuts > need_cuts )); then use_cuts=$need_cuts; fi

if (( use_cuts > 0 )); then
  head -n "$use_cuts" "$CUTS_FILE" | paste -sd, - > "$TIMES_FILE"
  SEGMENT_TIMES="$(cat "$TIMES_FILE")"
else
  SEGMENT_TIMES=""
fi


# Build force-keyframe list as plain times (no "t=" prefixes)
FORCE_LIST="$SEGMENT_TIMES"

echo "Using threshold: $chosen_thresh"
echo "Cut times: ${SEGMENT_TIMES:-<none>}"
echo "Exporting to: $OUTDIR"

# Encode + split with exact boundaries
ffmpeg -hide_banner -y -i "$SRC" \
  -map 0 \
  -c:v libx264 -preset veryfast -crf 18 -pix_fmt yuv420p \
  -c:a aac -b:a 160k \
  ${FORCE_LIST:+-force_key_frames "$FORCE_LIST"} \
  -f segment \
  ${SEGMENT_TIMES:+-segment_times "$SEGMENT_TIMES"} \
  -reset_timestamps 1 \
  "$OUTDIR/godzilla_%02d.mp4"




# If we produced more than SHOT_COUNT segments (can happen with extra cuts after the 10th),
# we can prune them. Usually not needed because we limited segment_times to the first 9 cuts.
echo "Done."
