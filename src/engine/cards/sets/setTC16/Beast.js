"use strict";
const Constants = require ("../../../Constants");
const BeastBase = require("../setTC18/Beast");

class Beast extends BeastBase {
  constructor (game) {
    super(game, "Beast", "Commander 2016 Tokens", "TC16");
  }
}

module.exports = Beast;
