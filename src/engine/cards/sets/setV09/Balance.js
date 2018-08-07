"use strict";
const Constants = require ("../../../Constants");
const BalanceBase = require("../setEMA/Balance");

class Balance extends BalanceBase {
  constructor (game) {
    super(game, "Balance", "From the Vault: Exiled", "V09");
  }
}

module.exports = Balance;
