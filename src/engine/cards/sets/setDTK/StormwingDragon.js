"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StormwingDragon extends UnimplementedCard {
  constructor (game) {
    super(game, "Stormwing Dragon", "Dragons of Tarkir", "DTK");
  }
}

module.exports = StormwingDragon;
