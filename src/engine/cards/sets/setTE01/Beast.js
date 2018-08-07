"use strict";
const Constants = require ("../../../Constants");
const BeastBase = require("../setTC18/Beast");

class Beast extends BeastBase {
  constructor (game) {
    super(game, "Beast", "Archenemy: Nicol Bolas Tokens", "TE01");
  }
}

module.exports = Beast;
