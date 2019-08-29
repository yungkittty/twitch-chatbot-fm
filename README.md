# Twitch Chatbot FM

## What is it?

Twitch Chatbot FM is a chatbot to allow the viewers, through command, to suggest players for the streamer team on Football Manager (FM). The streamer can then access the votes from a local website. The idea is to normalize the interactions to improve the experience of the viewers and the streamer.

## How to use it?

1. Download [the latest release]().

2. Unrar the the latest release wherever you want.

3. Edit the `tcf-configs.json` file with any editor and fill-in the following values:

   ```json
   {
   "TCF_CLIENT_BOT_USERNAME": "<The account username>",
   "TCF_CLIENT_BOT_TOKEN": "<The account token>",
   "TCF_CLIENT_BOT_CHANNEL": "<The channel name>"
   }
   ```
 
   `account` refers:
   - Either to your twitch account.
   - Either to a twitch account created for the chatbot, so it's clear from whom the message originate.
 
   **The account username** is the account username.
 
   **The account token** is the account token generated while logging-in on [this](https://twitchapps.com/tmi/) with your account.

   **The channel name** is the channel name where you want to run the chatbot.

   [*If you want more details on why these informations are needed.*](https://dev.twitch.tv/docs/irc/#get-environment-variables)

4. Run the `twitch-chatbot-fm.exe` executable. Use `twitch-chatbot-fm` instead if you're using Linux.

5. You're done! :tada: :tada:

Your viewers can now use the following command in the chat:

- `!tcf-vote [player_firstname] [player_surname]`.

![](https://user-images.githubusercontent.com/20394860/63874281-8b08ed80-c9c1-11e9-9525-726b5a2794fe.png)

You can now now use the local website in the browser **of the device running the executable**:

- http://localhost:4000

![](https://user-images.githubusercontent.com/20394860/63874486-dfac6880-c9c1-11e9-8b66-3a0e981ef4b8.png)

## How can I help?

If you have any suggestions or you have encountered any bugs, send me an email at:

`twitch.chatbot.fm@gmail.com`  

Also, if you have development skills in:

- React.Js
- Node.Js
- JavaScript
  
don't hesitate to open pull-requests as long as it remains relevant.

## What is the license?

Copyright (c) Quentin Woivré. All rights reserved.

Licensed under the [MIT](https://github.com/yungkittty/twitch-chatbot-fm/blob/master/LICENSE.md) license.
