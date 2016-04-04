"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SeasClaimBase = require("../set9ED/SeasClaim.js");

class SeasClaim extends SeasClaimBase {
  constructor(game) {
    super(game, "Sea's Claim", "Onslaught", "ONS");
  }
}

module.exports = SeasClaim;
