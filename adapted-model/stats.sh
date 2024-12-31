#!/bin/bash
cp mfc/*.mfc .
bw \
 -hmmdir ptm \
 -moddeffn ptm/mdef \
 -ts2cbfn .ptm. \
 -feat 1s_c_d_dd \
 -svspec 0-12/13-25/26-38 \
 -cmn current \
 -agc none \
 -dictfn cmudict-en-us.dict \
 -ctlfn copal.fileids \
 -lsnfn copal.transcription \
 -accumdir .
rm *.mfc
