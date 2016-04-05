"use strict";
const Constants = require ("../../../Constants");
const HighMarketBase = require("../setC15/HighMarket");

class HighMarket extends HighMarketBase {
  constructor(game) {
    super(game, "High Market", "From the Vault: Realms", "V12");
  }
}

module.exports = HighMarket;
