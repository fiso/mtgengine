"use strict";
const Constants = require ("../../../Constants");
const HighMarketBase = require("../setCMA/HighMarket");

class HighMarket extends HighMarketBase {
  constructor (game) {
    super(game, "High Market", "World Championship Decks 2000", "WC00");
  }
}

module.exports = HighMarket;
