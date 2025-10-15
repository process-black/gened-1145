#!/usr/bin/env bash

input="/Users/mk/Desktop/godzilla.mp4"
output_dir="/Users/mk/Development/gened-1145/public/videos/godzilla-random"

mkdir -p "$output_dir"

# Get video duration in seconds
duration=$(ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "$input")
duration=${duration%.*}  # round down to integer

clip_length=20
i=0
start=0

while (( $(echo "$start < $duration" | bc -l) )); do
  out="$output_dir/clip_$(printf "%03d" $i).mp4"
  ffmpeg -ss "$start" -i "$input" -t "$clip_length" -c copy "$out"
  echo "✅ Created: $out"
  start=$(echo "$start + $clip_length" | bc)
  ((i++))
done
