# [](header-1)Commands
| Command                                 | Example                                                                    | Information                                                                                                                                                       | Argument Info                                                                                                                                          |
|-----------------------------------------|----------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| [prefix] [text]                         | . this is in an ambed                                                      | Puts your text in a rich embed                                                                                                                                    | [text] is required and can be anything                                                                                                                 |
| 8ball/8 [text]                          | 8ball is this the best selfbot there is?                                   | Asks the 8ball your question                                                                                                                                      | [text] is required and can be anything                                                                                                                 |
| avatar/a [user]                         | avatar PapaJohn#7777                                                       | This command will return a link to the selected user's avatar. If no user is provided, it will target you instead.                                                | [user] is optional but can be a mention, Username#discrim, or user id                                                                                  |
| bold/b [text]                           | bold This is my message                                                    | Will bold your message for you.                                                                                                                                   | [bold] is required and can be any text                                                                                                                 |
| calculator/calc [equation]              | calc (2+2)*2-2/2                                                           | Mini-calculator that can add, subtract, multiply, and divide                                                                                                      | [equation] is required and must be made of the following: 0-9, parentheses, +-*/                                                                       |
| coinflip/coin/flip [flips]              | coinflip 9001                                                              | Flips a coin the specified amount of times                                                                                                                        | [flips] is optional but must be a number between 1 and 100 million, defaults to 1 if none is given                                                     |
| commands/help                           | commands                                                                   | Sends you a link to this page                                                                                                                                     | No arguments required                                                                                                                                  |
| disapprove/da [text]                    | disapprove You dont like this selfbot?                                     | Adds "ಠ_ಠ" to your message                                                                                                                                        | [text] is optional and can be anything                                                                                                                 |
| discrim [discrim]                       | discrim 7777                                                               | Shows all users with the specified discrim that you share a server with                                                                                           | [discrim] is required and is the 4 digit discriminator                                                                                                 |
| download/git/github                     | download                                                                   | Sends a link to the github page for this selfbot                                                                                                                  | No arguments required                                                                                                                                  |
| emoji/emote [text]                      | emoji This is my message                                                   | Converts the given message to emojis                                                                                                                              | [text] is required and must be alphanumeric to be converted                                                                                            |
| eval/e [code]                           | eval 2+2                                                                   | WARNING: This command can be very dangerous and potentially harmful if used incorrectly. Do not use it if you do not know what you are doing                      | [code] is required and is javascript code                                                                                                              |
| fakeeval/fe [fakecode]                  | fakeeval 'PapaJohnsSelfBot' === 'BestSelfBot'                              | Looks like eval, but always returns 'true'                                                                                                                        | [fakecode] is required and can be anything                                                                                                             |
| game/g                                  | game                                                                       | Tells you what game you are playing, helpful if you used setgame                                                                                                  | No arguments required                                                                                                                                  |
| guildstats/gs                           | guildstats                                                                 | Shows you statistics for the current guild                                                                                                                        | No arguments required                                                                                                                                  |
| happy/h [text]                          | happy This selfbot is great!                                               | Adds " ᕕ( ᐛ )ᕗ" to your message                                                                                                                                   | [text] is optional and can be anything you want                                                                                                        |
| impersonate [user]                      | impersonate PapaJohn#7777                                                  | Copies the avatar, nickname, and game of the targeted user                                                                                                        | [user] is required and can be a mention, Username#discrim, or user id                                                                                  |
| italics/i [text]                        | italics This is my message                                                 | Italicizes your text                                                                                                                                              | [text] is required and can be anything                                                                                                                 |
| lenny/l [text]                          | lenny Nice nudes                                                           | Adds "( ͡° ͜ʖ ͡°)" to your message                                                                                                                                   | [text] is optional and can be anything                                                                                                                 |
| memory/mem/m                            | memory                                                                     | Shows how much memory the selfbot is using                                                                                                                        | No arguments required                                                                                                                                  |
| nick/n [name]                           | nick Papa John                                                             | Changes your nickname in the current server to what you specify (if you have permission)                                                                          | [name] is required and must fit the guidelines for being a nickname                                                                                    |
| ping                                    | ping                                                                       | Shows your selfbots ping                                                                                                                                          | No arguments required                                                                                                                                  |
| poll [Title]|[Option 1]|[Option 2]. . . | poll Is Papa Johns selfbot the best?|Yes|No|I can add more options??       | Creates a poll with reactions that has up to 9 choices                                                                                                            | [Title] is required and can be anything you want[Option 1] and [Option 2] are required and can be anything you want, more options can be added up to 9 |
| prune/p [amount]                        | prune 5                                                                    | Removes your last messages in the channel                                                                                                                         | [amount] is optional but must be from 1-100, defaults to 10 if no amount is given                                                                      |
| quote/q [user]|[text]                   | quote PapaJohn#7777|potato                                                 | Quotes the last message in the channel found from [user] that contains [text]                                                                                     | [user] is required and can be a mention, Username#discrim, or user id[text] is required and can be anything                                            |
| quoteid/qid [messageid]                 | quoteid 123454206669001131                                                 | Quotes a message from the channel with the id given                                                                                                               | [messageid] is required and must be the id of a message from the same channel                                                                          |
| rageflip/rf [text]                      | rageflip Now I'm mad                                                       | Adds "┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻" to your message                                                                                                                       | [text] is optional and can be anything                                                                                                                 |
| reboot                                  | reboot                                                                     | Reboots the selfbot                                                                                                                                               | No arguments required                                                                                                                                  |
| remove/r [text]                         | r @PapaJohn                                                                | Instantly deletes the message                                                                                                                                     | [text] is optional and can be anything                                                                                                                 |
| removeplus/r+/rp [text]                 | rp $help                                                                   | Sends [text] as a message then instantly deletes it                                                                                                               | [text] is required and can be anything                                                                                                                 |
| roll [maxRoll]                          | roll 69                                                                    | rolls a die with a given amount of sides                                                                                                                          | [maxRoll] is optional but must be a number, defaults to 6 when none is given                                                                           |
| rps [choice]                            | rps rock                                                                   | Play Rock, Paper, Scissors against your selfbot                                                                                                                   | [choice] is required and must be either rock, paper, or scissors]                                                                                      |
| server                                  | server                                                                     | Sends a link to this Selfbot's server                                                                                                                             | No arguments required                                                                                                                                  |
| setavatar/sa [imageLink]                | setavatar http://i0.kym-cdn.com/photos/images/original/001/235/521/601.png | Changes your avatar to the image from the link you provide                                                                                                        | [imageLink] is required and must be a valid link to an image                                                                                           |
| setgame/sg [game]                       | setgame Super Mario 64: Last Impact                                        | Sets the game you are currently playing to [game]. (You wont be able to see this, but others will. You can use the game command to see what game you are playing) | [game] is required and can be anything                                                                                                                 |
| shrug/s [text]                          | shrug I dont know                                                          | Works just like the integrated shrug command                                                                                                                      | [text] is optional and can be anything                                                                                                                 |
| statistics/stats                        | statistics                                                                 | Gives you some statistics                                                                                                                                         | No arguments required                                                                                                                                  |
| status [status]                         | status invisible                                                           | Sets your status to [status]                                                                                                                                      | [status] is required and must be 'online', 'idle', 'dnd', or 'invisible'                                                                               |
| underline/u [text]                      | underline This is my message                                               | Underlines the given text                                                                                                                                         | [text] is required and can be anything                                                                                                                 |
| uptime/ut                               | uptime                                                                     | Shows how long the selfbot has been running                                                                                                                       | No arguments required                                                                                                                                  |
| userstats/us [user]                     | userstats PapaJohn#7777                                                    | Shows some stats for [user]                                                                                                                                       | [user] is optional but must be a mention, Username#discrim, or user id, if no user is provided, it will default to yourself                            |