'use strict';
const Constants = require('../../../Constants');
const CursedLandBase = require('../set5ED/CursedLand');

class CursedLand extends CursedLandBase {
  constructor (game) {
    super(game, 'Cursed Land', 'Unlimited Edition', '2ED');
  }
}

module.exports = CursedLand;
