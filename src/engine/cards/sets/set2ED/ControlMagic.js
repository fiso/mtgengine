'use strict';
const Constants = require('../../../Constants');
const ControlMagicBase = require('../setCMA/ControlMagic');

class ControlMagic extends ControlMagicBase {
  constructor (game) {
    super(game, 'Control Magic', 'Unlimited Edition', '2ED');
  }
}

module.exports = ControlMagic;
