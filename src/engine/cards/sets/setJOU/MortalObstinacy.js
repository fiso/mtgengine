"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MortalObstinacy extends UnimplementedCard {
  constructor (game) {
    super(game, "Mortal Obstinacy", "Journey into Nyx", "JOU");
  }
}

module.exports = MortalObstinacy;
