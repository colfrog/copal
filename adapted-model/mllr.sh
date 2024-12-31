#!/bin/bash
mllr_solve \
    -meanfn ptm/means \
    -varfn ptm/variances \
    -outmllrfn mllr_matrix -accumdir .
