"use strict";
const Constants = require ("../../../Constants");
const NaturesClaimBase = require("../setCNS/NaturesClaim");

class NaturesClaim extends NaturesClaimBase {
  constructor(game) {
    super(game, "Nature's Claim", "Worldwake", "WWK");
  }
}

module.exports = NaturesClaim;
