"use strict";
const Constants = require ("../../../Constants");
const BeastBase = require("../setTC18/Beast");

class Beast extends BeastBase {
  constructor (game) {
    super(game, "Beast", "Magic 2011 Tokens", "TM11");
  }
}

module.exports = Beast;
