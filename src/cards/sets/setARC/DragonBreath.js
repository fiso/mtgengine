"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DragonBreath extends UnimplementedCard {
  constructor (game) {
    super(game, "Dragon Breath", "Archenemy", "ARC");
  }
}

module.exports = DragonBreath;
