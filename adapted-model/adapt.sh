#!/bin/bash
map_adapt \
    -moddeffn ptm/mdef \
    -ts2cbfn .ptm. \
    -meanfn ptm/means \
    -varfn ptm/variances \
    -mixwfn ptm/mixture_weights \
    -tmatfn ptm/transition_matrices \
    -accumdir . \
    -mapmeanfn ptm-adapt/means \
    -mapvarfn ptm-adapt/variances \
    -mapmixwfn ptm-adapt/mixture_weights \
    -maptmatfn ptm-adapt/transition_matrices
