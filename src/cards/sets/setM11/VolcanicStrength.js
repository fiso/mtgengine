"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VolcanicStrength extends UnimplementedCard {
  constructor (game) {
    super(game, "Volcanic Strength", "Magic 2011", "M11");
  }
}

module.exports = VolcanicStrength;
