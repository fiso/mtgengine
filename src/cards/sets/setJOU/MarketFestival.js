"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarketFestival extends UnimplementedCard {
  constructor(game) {
    super(game, "Market Festival", "Journey into Nyx", "JOU");
  }
}

module.exports = MarketFestival;
