"use strict";
const Constants = require ("../../../Constants");
const SkyshroudClaimBase = require("../setBBD/SkyshroudClaim");

class SkyshroudClaim extends SkyshroudClaimBase {
  constructor (game) {
    super(game, "Skyshroud Claim", "Nemesis", "NEM");
  }
}

module.exports = SkyshroudClaim;
