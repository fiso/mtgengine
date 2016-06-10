"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WellLaidPlans extends UnimplementedCard {
  constructor (game) {
    super(game, "Well-Laid Plans", "Invasion", "INV");
  }
}

module.exports = WellLaidPlans;
