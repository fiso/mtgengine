"use strict";
const Constants = require ("../../../Constants");
const BlightningBase = require("../setDDK/Blightning");

class Blightning extends BlightningBase {
  constructor(game) {
    super(game, "Blightning", "Magic Player Rewards", "pMPR");
  }
}

module.exports = Blightning;
