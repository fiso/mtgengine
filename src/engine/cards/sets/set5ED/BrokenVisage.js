'use strict';
const Constants = require('../../../Constants');
const BrokenVisageBase = require('../setME2/BrokenVisage');

class BrokenVisage extends BrokenVisageBase {
  constructor (game) {
    super(game, 'Broken Visage', 'Fifth Edition', '5ED');
  }
}

module.exports = BrokenVisage;
