#!/bin/sh

cd ./packages/tcf-client

npm run build:production

cd ../../

nexe -b -i index.js --target "${1}-x86" -o twitch-bot-fm

exit 0
