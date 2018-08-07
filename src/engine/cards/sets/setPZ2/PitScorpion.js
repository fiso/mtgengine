"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PitScorpion extends UnimplementedCard {
  constructor (game) {
    super(game, "Pit Scorpion", "You Make the Cube", "PZ2");
  }
}

module.exports = PitScorpion;
