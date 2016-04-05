"use strict";
const Constants = require ("../../../Constants");
const PonderBase = require("../setLRW/Ponder");

class Ponder extends PonderBase {
  constructor(game) {
    super(game, "Ponder", "Magic Player Rewards", "pMPR");
  }
}

module.exports = Ponder;
