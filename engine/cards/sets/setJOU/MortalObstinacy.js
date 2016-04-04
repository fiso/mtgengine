"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MortalObstinacy extends Card {
  constructor(game) {
    super(game, "Mortal Obstinacy", "Journey into Nyx", "JOU");
  }
}

module.exports = MortalObstinacy;
