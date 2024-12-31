#!/bin/bash
rm -rf ptm-adapt
cp -R ptm ptm-adapt
./format-wav.sh
./make-mfc.sh
./stats.sh
./mllr.sh
./adapt.sh
./sendump.sh
