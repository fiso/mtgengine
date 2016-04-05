"use strict";
const Constants = require ("../../../Constants");
const SeasClaimBase = require("../set9ED/SeasClaim");

class SeasClaim extends SeasClaimBase {
  constructor(game) {
    super(game, "Sea's Claim", "Onslaught", "ONS");
  }
}

module.exports = SeasClaim;
