'use strict';
const Constants = require('../../../Constants');
const OrnithopterBase = require('../setAER/Ornithopter');

class Ornithopter extends OrnithopterBase {
  constructor (game) {
    super(game, 'Ornithopter', 'Fifth Edition', '5ED');
  }
}

module.exports = Ornithopter;
