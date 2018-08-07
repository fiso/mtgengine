"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeasClaim extends UnimplementedCard {
  constructor (game) {
    super(game, "Sea's Claim", "Ninth Edition", "9ED");
  }
}

module.exports = SeasClaim;
