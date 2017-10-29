const patron = require('patron.js');

class IsDiscrim extends patron.ArgumentPrecondition {
  async run(command, msg, argument, args, value) {
    if (value.replace(/[^0-9]/gi, '').length !== 4 || value.length !== 4) {
      return patron.PreconditionResult.fromError(command, 'You have provided an invalid discrim');
    }

    return patron.PreconditionResult.fromSuccess();
  }
}

module.exports = IsDiscrim;
