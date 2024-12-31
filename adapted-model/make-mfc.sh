#!/bin/bash
rm mfc/*
sphinx_fe -argfile ptm/feat.params -samprate 16000 -c copal.fileids -di wav-fmt -do mfc -ei wav -eo mfc -mswav yes
