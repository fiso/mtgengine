"use strict";
const Constants = require ("../../../Constants");
const SearingBlazeBase = require("../setDDI/SearingBlaze");

class SearingBlaze extends SearingBlazeBase {
  constructor (game) {
    super(game, "Searing Blaze", "Magic Player Rewards", "pMPR");
  }
}

module.exports = SearingBlaze;
