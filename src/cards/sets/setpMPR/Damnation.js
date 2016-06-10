"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Damnation extends UnimplementedCard {
  constructor (game) {
    super(game, "Damnation", "Magic Player Rewards", "pMPR");
  }
}

module.exports = Damnation;
