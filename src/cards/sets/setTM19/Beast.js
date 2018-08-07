"use strict";
const Constants = require ("../../../Constants");
const BeastBase = require("../setTC18/Beast");

class Beast extends BeastBase {
  constructor (game) {
    super(game, "Beast", "Core Set 2019 Tokens", "TM19");
  }
}

module.exports = Beast;
