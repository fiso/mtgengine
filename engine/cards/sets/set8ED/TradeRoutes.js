"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TradeRoutes extends Card {
  constructor(game) {
    super(game, "Trade Routes", "Eighth Edition", "8ED");
  }
}

module.exports = TradeRoutes;
