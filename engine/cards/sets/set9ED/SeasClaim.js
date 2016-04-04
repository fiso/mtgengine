"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SeasClaim extends Card {
  constructor(game) {
    super(game, "Sea's Claim", "Ninth Edition", "9ED");
  }
}

module.exports = SeasClaim;
