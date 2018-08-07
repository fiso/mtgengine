'use strict';
const Constants = require('../../../Constants');
const BalanceBase = require('../setEMA/Balance');

class Balance extends BalanceBase {
  constructor (game) {
    super(game, 'Balance', 'Unlimited Edition', '2ED');
  }
}

module.exports = Balance;
