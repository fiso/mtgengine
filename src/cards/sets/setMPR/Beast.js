"use strict";
const Constants = require ("../../../Constants");
const BeastBase = require("../setTC18/Beast");

class Beast extends BeastBase {
  constructor (game) {
    super(game, "Beast", "Magic Player Rewards 2001", "MPR");
  }
}

module.exports = Beast;
