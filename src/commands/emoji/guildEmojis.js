const patron = require('patron.js');
const util = require('../../utility');

class GuildEmojis extends patron.Command {
  constructor() {
    super({
      names: ['guildemojis', 'ge', 'guildemotes'],
      groupName: 'emoji',
      description: 'List the current guild\'s emojis'
    });
  }

  async run(msg) {
    const emojis = msg.guild.emojis.array();
    if (emojis.length === 0) {
      return util.Messenger.sendError(msg.channel, '`' + msg.guild.name + '` has no emojis');
    }
    let m = '';
    for (let i = 0; i < emojis.length; i++) {
      m += emojis[i] + ' ';
    }
    return util.Messenger.send(msg.channel, m, msg.guild.name + '\'s Emojis');
  }
}

module.exports = new GuildEmojis();
