#!/usr/bin/env bash

# code --list-extensions > extensions.txt
cat extensions.txt | while read extension || [[ -n $extension ]];
do
  code --install-extension $extension --force
done