#!/bin/bash

if [ "$1" == "--show-item" ]; then
  real_path=$(realpath -m "$2")
  echo "real path is $real_path"
  if [ -f "$real_path" ]; then
    gdbus call --session \
      --dest org.freedesktop.FileManager1 --object-path /org/freedesktop/FileManager1 \
      --method org.freedesktop.FileManager1.ShowItems "['file://$real_path']" "" >/dev/null
  else
    zenity --error --text "Path $real_path not found" --icon-name com.tencent.wechat
  fi
fi