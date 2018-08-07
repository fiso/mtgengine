"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StingingScorpion extends UnimplementedCard {
  constructor (game) {
    super(game, "Stinging Scorpion", "Unstable", "UST");
  }
}

module.exports = StingingScorpion;
