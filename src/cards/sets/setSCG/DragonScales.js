"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DragonScales extends UnimplementedCard {
  constructor (game) {
    super(game, "Dragon Scales", "Scourge", "SCG");
  }
}

module.exports = DragonScales;
