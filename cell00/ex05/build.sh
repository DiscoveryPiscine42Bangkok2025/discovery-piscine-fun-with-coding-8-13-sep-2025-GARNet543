#!/bin/bash

# if no arguments provided
if [ $# -eq 0 ]; then
    echo "No arguments supplied"
    exit 1
fi

# loop through all arguments
for arg in "$@"; do
    mkdir -p "ex$arg"
done
