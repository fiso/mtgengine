"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VolcanicStrength extends Card {
  constructor(game) {
    super(game, "Volcanic Strength", "Magic 2011", "M11");
  }
}

module.exports = VolcanicStrength;
