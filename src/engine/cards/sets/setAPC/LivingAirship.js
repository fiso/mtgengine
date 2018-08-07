"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LivingAirship extends UnimplementedCard {
  constructor (game) {
    super(game, "Living Airship", "Apocalypse", "APC");
  }
}

module.exports = LivingAirship;
