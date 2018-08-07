"use strict";
const Constants = require ("../../../Constants");
const BeastBase = require("../setTC18/Beast");

class Beast extends BeastBase {
  constructor (game) {
    super(game, "Beast", "Conspiracy: Take the Crown Tokens", "TCN2");
  }
}

module.exports = Beast;
