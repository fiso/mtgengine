"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LivingAirship extends Card {
  constructor(game) {
    super(game, "Living Airship", "Apocalypse", "APC");
  }
}

module.exports = LivingAirship;
