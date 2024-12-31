#!/bin/bash
mk_s2sendump \
    -pocketsphinx yes \
    -moddeffn ptm-adapt/mdef \
    -mixwfn ptm-adapt/mixture_weights \
    -sendumpfn ptm-adapt/sendump
