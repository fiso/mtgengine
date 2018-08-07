'use strict';
const Constants = require('../../../Constants');
const SacrificeBase = require('../setSUM/Sacrifice');

class Sacrifice extends SacrificeBase {
  constructor (game) {
    super(game, 'Sacrifice', 'Unlimited Edition', '2ED');
  }
}

module.exports = Sacrifice;
