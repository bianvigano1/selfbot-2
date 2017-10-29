const patron = require('patron.js');
const util = require('../../utility');

class StealEmoji extends patron.Command {
  constructor() {
    super({
      names: ['stealemoji', 'copyemoji'],
      groupName: 'emoji',
      description: 'Copies an emoji to the current server',
      botPermissions: ['MANAGE_EMOJIS'],
      args: [
        new patron.Argument({
          name: 'emoji',
          key: 'emoji',
          type: 'emoji',
          example: 'thonk',
          remainder: true
        })
      ]
    });
  }

  async run(msg, args) {
    try {
      const newEmoji = await msg.guild.createEmoji(args.emoji.url, args.emoji.name);
      return util.Messenger.send(msg.channel, 'Successfully created an emoji: ' + newEmoji);
    } catch (err) {
      return util.Messenger.sendError(msg.channel, 'A problem occured copying that emoji to this guild.');
    }
  }
}

module.exports = new StealEmoji();
