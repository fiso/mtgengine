"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TradeCaravan extends UnimplementedCard {
  constructor(game) {
    super(game, "Trade Caravan", "Homelands", "HML");
  }
}

module.exports = TradeCaravan;
