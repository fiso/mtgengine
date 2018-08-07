"use strict";
const Constants = require ("../../../Constants");
const BalanceBase = require("../setEMA/Balance");

class Balance extends BalanceBase {
  constructor (game) {
    super(game, "Balance", "Judge Gift Cards 2004", "G04");
  }
}

module.exports = Balance;
