"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SearingBlazeBase = require("../setDDI/SearingBlaze.js");

class SearingBlaze extends SearingBlazeBase {
  constructor(game) {
    super(game, "Searing Blaze", "Magic Player Rewards", "pMPR");
  }
}

module.exports = SearingBlaze;
