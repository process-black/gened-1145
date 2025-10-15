#!/usr/bin/env bash

set -euo pipefail

input="/Users/mk/Desktop/godzilla.mp4"
output_dir="/Users/mk/Development/gened-1145/public/videos/godzilla-random-3"

# Clip configuration
clip_length=20            # seconds per clip
max_clips=20              # safety stop so we do not render the whole film by accident
video_bitrate="1.5M"
keyframe_interval=1       # 1 == all intra frames for frame-accurate scrubbing

mkdir -p "$output_dir"

# Get video duration in seconds
duration=$(ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "$input")
duration=${duration%.*}  # round down to integer

i=0
start=0

while (( $(echo "$start < $duration" | bc -l) )); do
  if (( i >= max_clips )); then
    echo "ℹ️  Hit clip limit ($max_clips). Stop rendering more segments."
    break
  fi

  out="$output_dir/clip_$(printf "%03d" $i).webm"

  ffmpeg -loglevel error \
    -ss "$start" -i "$input" -t "$clip_length" \
    -c:v libvpx-vp9 -b:v "$video_bitrate" \
    -g "$keyframe_interval" -keyint_min "$keyframe_interval" \
    -auto-alt-ref 0 -lag-in-frames 0 -tile-columns 0 -row-mt 1 \
    -pix_fmt yuv420p -an \
    -y "$out"

  echo "✅ Created: $out"

  start=$(echo "$start + $clip_length" | bc)
  ((i++))
done

echo "🎬 Done! Created $i WebM clips in: $output_dir"
