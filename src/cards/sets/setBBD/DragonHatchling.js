"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DragonHatchling extends UnimplementedCard {
  constructor (game) {
    super(game, "Dragon Hatchling", "Battlebond", "BBD");
  }
}

module.exports = DragonHatchling;
