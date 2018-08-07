"use strict";
const Constants = require ("../../../Constants");
const NaturesClaimBase = require("../setIMA/NaturesClaim");

class NaturesClaim extends NaturesClaimBase {
  constructor (game) {
    super(game, "Nature's Claim", "Conspiracy", "CNS");
  }
}

module.exports = NaturesClaim;
