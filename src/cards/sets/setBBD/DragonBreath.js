"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DragonBreath extends UnimplementedCard {
  constructor (game) {
    super(game, "Dragon Breath", "Battlebond", "BBD");
  }
}

module.exports = DragonBreath;
