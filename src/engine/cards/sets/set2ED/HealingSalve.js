'use strict';
const Constants = require('../../../Constants');
const HealingSalveBase = require('../setDVD/HealingSalve');

class HealingSalve extends HealingSalveBase {
  constructor (game) {
    super(game, 'Healing Salve', 'Unlimited Edition', '2ED');
  }
}

module.exports = HealingSalve;
