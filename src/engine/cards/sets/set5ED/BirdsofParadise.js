'use strict';
const Constants = require('../../../Constants');
const BirdsofParadiseBase = require('../setCN2/BirdsofParadise');

class BirdsofParadise extends BirdsofParadiseBase {
  constructor (game) {
    super(game, 'Birds of Paradise', 'Fifth Edition', '5ED');
  }
}

module.exports = BirdsofParadise;
