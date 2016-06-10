"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GiantScorpion extends UnimplementedCard {
  constructor (game) {
    super(game, "Giant Scorpion", "Magic 2013", "M13");
  }
}

module.exports = GiantScorpion;
