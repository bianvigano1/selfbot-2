# Original Selfbot by John#0969, this Fork and its modifications by PapaJohn#7777
In order to run the bot, you must create a Credentials.json file, following the same format as the Credentials Example.json file. This will by default be gitignored, to prevent any accidental commits of your token.



# Commands in this Fork

n/nick [name] - changes your nickname to what you specify

8/8ball [question] - asks the mystical 8ball a question

l/lenny - ( ͡° ͜ʖ ͡°)

s/shrug - shrug

ping - sends your ping in ms

p/prune [amount] - prunes messages (default is 10)

q/quote [mention or username#discrim]|[text] - searches the last 100 messages by the specified user for one that contains the specified text and quotes the most recent match

reboot - restarts the selfbot

fe/fakeeval [fake code] - fake eval, returns true

e/eval [code] - evaluates code

stats/statistics - statistics

r [text] - instantly deletes the message

ut/uptime - bot uptime 

ss - alternate statistics

emoji/emote [text] - sends your message in emojis

avatar/a [mention or username#discrim] - links the avatar of the specified user

us/userstats [mention or username#discrim] - shows statistics for yourself, or a specified user

guildstats/gs - shows statistics for current guild

status [status] - sets your status to what you specify

discrim [discriminator] - finds users with the same descriminator that you specify (helpful for discrim rerolling)

sa/setavatar [image link] - changes your avatar to the image you link

poll [Title|Option 1|Option 2...] - creates a mini-poll with reactions with up to 9 options

help/git/github - Sends a link to this repository

sg/setgame [text] - Sets what game you are currently playing, leave empty to set yourself to not be playing a game (only visible to others)

g/game - shows you what game you are playing (helpful if you used setgame)

impersonate [mention or username#discrim] - copies the avatar, displayname, and game of a specified user in that guild

Using just the prefix then a message will send the message in an embed

# Things to NOT do

eval credentials, this will leak your token and access to your account

# Other Info

This fork will log all commands in the command prompt for you

# Install Help (Windows)
1. Install node.js (most recent version) with npm [If this causes you trouble, http://blog.teamtreehouse.com/install-node-js-npm-windows]

2. install git and add to a folder with the selfbot files (Shift+right click, open git gui here)

3. open command prompt in that folder (Shift+right click, command prompt option) and run the command: npm i -S hydrabolt/discord.js

4. rename "credentials example.json" to "credentials.json" and add your discord token where it obviously goes (and change prefix to whatever you want)

5. now run RunSelfBot.bat

===========

To update, just install the new selfbot files and replace the old ones and make sure credentials.json is formatted correctly
