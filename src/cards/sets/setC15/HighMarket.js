"use strict";
const Constants = require ("../../../Constants");
const HighMarketBase = require("../setCMA/HighMarket");

class HighMarket extends HighMarketBase {
  constructor (game) {
    super(game, "High Market", "Commander 2015", "C15");
  }
}

module.exports = HighMarket;
