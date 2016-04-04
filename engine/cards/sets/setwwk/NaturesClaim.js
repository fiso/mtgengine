"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NaturesClaimBase = require("../setCNS/NaturesClaim.js");

class NaturesClaim extends NaturesClaimBase {
  constructor(game) {
    super(game, "Nature's Claim", "Worldwake", "WWK");
  }
}

module.exports = NaturesClaim;
