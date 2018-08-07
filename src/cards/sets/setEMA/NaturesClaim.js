"use strict";
const Constants = require ("../../../Constants");
const NaturesClaimBase = require("../setIMA/NaturesClaim");

class NaturesClaim extends NaturesClaimBase {
  constructor (game) {
    super(game, "Nature's Claim", "Eternal Masters", "EMA");
  }
}

module.exports = NaturesClaim;
