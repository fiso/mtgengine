'use strict';
const Constants = require('../../../Constants');
const TwiddleBase = require('../set8ED/Twiddle');

class Twiddle extends TwiddleBase {
  constructor (game) {
    super(game, 'Twiddle', 'Unlimited Edition', '2ED');
  }
}

module.exports = Twiddle;
