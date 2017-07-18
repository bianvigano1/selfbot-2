const patron = require('patron.js');

class Tableflip extends patron.Command {
  constructor() {
    super({
      name: 'tableflip',
      aliases: ['tf'],
      group: 'emote',
      description: 'Adds "(╯°□°）╯︵ ┻━┻" to your message',
      guildOnly: false,
      args: [
        new patron.Argument({
          name: 'text',
          key: 'text',
          type: 'string',
          example: 'They forgot the breadsticks',
          remainder: true,
          defaultValue: ''
        })
      ]
    });
  }

  async run(msg, args) {
    return msg.channel.send(args.text + ' (╯°□°）╯︵ ┻━┻');
  }
}

module.exports = new Tableflip();
