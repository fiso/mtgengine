'use strict';
const Constants = require('../../../Constants');
const BalanceBase = require('../setEMA/Balance');

class Balance extends BalanceBase {
  constructor (game) {
    super(game, 'Balance', 'Fourth Edition', '4ED');
  }
}

module.exports = Balance;
