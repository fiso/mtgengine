"use strict";
const Constants = require ("../../../Constants");
const BalanceBase = require("../setCED/Balance");

class Balance extends BalanceBase {
  constructor (game) {
    super(game, "Balance", "International Collector's Edition", "CEI");
  }
}

module.exports = Balance;
