"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TradeRoutes extends UnimplementedCard {
  constructor (game) {
    super(game, "Trade Routes", "Ninth Edition", "9ED");
  }
}

module.exports = TradeRoutes;
