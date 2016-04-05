"use strict";
const Constants = require ("../../../Constants");
const TradeRoutesBase = require("../set8ED/TradeRoutes");

class TradeRoutes extends TradeRoutesBase {
  constructor(game) {
    super(game, "Trade Routes", "Mercadian Masques", "MMQ");
  }
}

module.exports = TradeRoutes;
