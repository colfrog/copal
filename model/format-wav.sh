#!/bin/bash
rm wav-fmt/*.wav
for i in wav/*.wav; do
	ffmpeg -i $i -ac 1 -ar 16000 wav-fmt/$(basename $i)
done
