const patron = require('patron.js');

class Clear extends patron.Command {
  constructor() {
    super({
      names: ['clear', 'clearconsole', 'hide', 'hideconsole'],
      groupName: 'utility',
      description: 'Clears the console',
      guildOnly: false
    });
  }

  async run(msg) {
    process.stdout.write('\x1Bc');
    console.log('Console Logs Successfully Cleared'.green);
  }
}

module.exports = new Clear();
