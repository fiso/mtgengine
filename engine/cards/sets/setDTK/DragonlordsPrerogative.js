"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DragonlordsPrerogative extends UnimplementedCard {
  constructor(game) {
    super(game, "Dragonlord's Prerogative", "Dragons of Tarkir", "DTK");
  }
}

module.exports = DragonlordsPrerogative;
