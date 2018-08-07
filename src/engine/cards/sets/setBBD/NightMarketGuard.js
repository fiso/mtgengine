"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NightMarketGuard extends UnimplementedCard {
  constructor (game) {
    super(game, "Night Market Guard", "Battlebond", "BBD");
  }
}

module.exports = NightMarketGuard;
