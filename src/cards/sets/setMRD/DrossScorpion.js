"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DrossScorpion extends UnimplementedCard {
  constructor (game) {
    super(game, "Dross Scorpion", "Mirrodin", "MRD");
  }
}

module.exports = DrossScorpion;
