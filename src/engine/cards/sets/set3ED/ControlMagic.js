'use strict';
const Constants = require('../../../Constants');
const ControlMagicBase = require('../setCMA/ControlMagic');

class ControlMagic extends ControlMagicBase {
  constructor (game) {
    super(game, 'Control Magic', 'Revised Edition', '3ED');
  }
}

module.exports = ControlMagic;
