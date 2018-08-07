"use strict";
const Constants = require ("../../../Constants");
const TradeRoutesBase = require("../set9ED/TradeRoutes");

class TradeRoutes extends TradeRoutesBase {
  constructor (game) {
    super(game, "Trade Routes", "Eighth Edition", "8ED");
  }
}

module.exports = TradeRoutes;
