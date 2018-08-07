'use strict';
const Constants = require('../../../Constants');
const OrnithopterBase = require('../setAER/Ornithopter');

class Ornithopter extends OrnithopterBase {
  constructor (game) {
    super(game, 'Ornithopter', 'Fourth Edition', '4ED');
  }
}

module.exports = Ornithopter;
