#!/bin/sh

cd ./packages/tcf-client

npm run build:production

cd ../../

nexe -b -i index.js --target "${1}-x86" -o twitch-chatbot-fm

exit 0
