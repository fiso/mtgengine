"use strict";
const Constants = require ("../../../Constants");
const BeastBase = require("../setTC18/Beast");

class Beast extends BeastBase {
  constructor (game) {
    super(game, "Beast", "Modern Masters 2017 Tokens", "TMM3");
  }
}

module.exports = Beast;
