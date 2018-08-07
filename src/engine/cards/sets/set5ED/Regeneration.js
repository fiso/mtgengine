'use strict';
const Constants = require('../../../Constants');
const RegenerationBase = require('../set10E/Regeneration');

class Regeneration extends RegenerationBase {
  constructor (game) {
    super(game, 'Regeneration', 'Fifth Edition', '5ED');
  }
}

module.exports = Regeneration;
