"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DragonHatchling extends UnimplementedCard {
  constructor(game) {
    super(game, "Dragon Hatchling", "Magic 2013", "M13");
  }
}

module.exports = DragonHatchling;
