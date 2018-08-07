"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DragonHunter extends UnimplementedCard {
  constructor (game) {
    super(game, "Dragon Hunter", "Dragons of Tarkir", "DTK");
  }
}

module.exports = DragonHunter;
