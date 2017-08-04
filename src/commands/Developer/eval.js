const patron = require('patron.js');
const util = require('../../utility');
const Discord = require('discord.js');
const Exclude = require('../../preconditions/exclude.js');

class Eval extends patron.Command {
  constructor() {
    super({
      name: 'eval',
      group: 'developer',
      description: 'Evaluate JavaScript code',
      guildOnly: false,
      args: [
        new patron.Argument({
          name: 'code',
          key: 'code',
          type: 'string',
          example: 'msg.author.tag',
          remainder: true,
          preconditions: [new Exclude('client')]
        })
      ]
    });
  }

  async run(msg, args) {
    try {
      let evaled = eval(args.code);
      if (typeof evaled !== 'string') {
        evaled = require('util').inspect(evaled);
      }
      const embed = new Discord.RichEmbed()
        .addField('Eval', '```js\n' + args.code + '```')
        .addField('Returns', '```js\n' + evaled + '```');
      return util.Messenger.sendEmbed(msg.channel, embed);
    } catch (err) {
      return util.Messenger.sendError(msg.channel, '```js\n' + err + '```');
    }
  }
}

module.exports = new Eval();