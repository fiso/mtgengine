"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NightMarketLookout extends UnimplementedCard {
  constructor (game) {
    super(game, "Night Market Lookout", "Kaladesh", "KLD");
  }
}

module.exports = NightMarketLookout;
