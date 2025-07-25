#!/usr/bin/env bash

handler(){
  echo "Processing the Ctrl + C"
  docker system prune -a
  exit 0
}

trap handler INT

docker build -t amazonasdatahubsite .

open http://localhost:3000/amazonasdatahubsite/

docker run -i -v /home/nelsonworkstation/Documents/work/amazonasdatahubsite:/usr/src/app:delegated -v /usr/src/app/node_modules/ -p 3000:3000 amazonasdatahubsite
