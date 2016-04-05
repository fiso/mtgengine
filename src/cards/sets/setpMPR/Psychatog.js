"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Psychatog extends UnimplementedCard {
  constructor(game) {
    super(game, "Psychatog", "Magic Player Rewards", "pMPR");
  }
}

module.exports = Psychatog;
