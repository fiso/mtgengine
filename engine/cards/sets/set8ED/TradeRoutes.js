"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TradeRoutes extends UnimplementedCard {
  constructor(game) {
    super(game, "Trade Routes", "Eighth Edition", "8ED");
  }
}

module.exports = TradeRoutes;
