#!/bin/sh
while read line; do
  eval "$line"
done < task-1.txt
