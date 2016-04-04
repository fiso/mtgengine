"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TradeRoutesBase = require("../set8ED/TradeRoutes.js");

class TradeRoutes extends TradeRoutesBase {
  constructor(game) {
    super(game, "Trade Routes", "Ninth Edition", "9ED");
  }
}

module.exports = TradeRoutes;
