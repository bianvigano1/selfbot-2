const patron = require('patron.js');
const util = require('../../utility');

class Achievement extends patron.Command {
  constructor() {
    super({
      names: ['achievement', 'ag', 'achievementget'],
      groupName: 'image',
      description: 'For when someone deserves an achievement',
      guildOnly: false,
      args: [
        new patron.Argument({
          name: 'achievementName',
          key: 'text',
          type: 'string',
          example: 'Be a complete idiot',
          remainder: true
        })
      ]
    });
  }

  async run(msg, args) {
    let text = util.StringUtil.cleanContent(msg, args.text).replace(/[^0-9a-z ]/gi, '');
    if (text.length === 0) {
      return util.Messenger.sendError(msg.channel, 'Achievement name must be alphanumeric');
    }
    text = text.substring(0, 24);
    let link = 'https://www.minecraftskinstealer.com/achievement/a.php?i=2&h=Achievement+Get!&t=';
    for (let i = 0; i < text.length; i++) {
      if (text.charAt(i) === ' ') {
        link += '+';
      }else{
        link += text.charAt(i);
      }
    }

    return msg.channel.send({ files: [{ attachment: link, name: 'achievement.png' }] });
  }
}

module.exports = new Achievement();
