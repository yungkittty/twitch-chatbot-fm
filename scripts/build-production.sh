#!/bin/sh

cd ./packages/tcf-client

npm run build:production

cd ../../

nexe -i index.js --target "${1}-x64-8.16.0" -o twitch-chatbot-fm

exit 0
