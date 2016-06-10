"use strict";
const Constants = require ("../../../Constants");
const BalanceBase = require("../setCED/Balance");

class Balance extends BalanceBase {
  constructor (game) {
    super(game, "Balance", "Vintage Masters", "VMA");
  }
}

module.exports = Balance;
