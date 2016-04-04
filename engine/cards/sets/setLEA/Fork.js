"use strict";
const Constants = require ("../../../Constants");
const ForkBase = require("../setCED/Fork");

class Fork extends ForkBase {
  constructor(game) {
    super(game, "Fork", "Limited Edition Alpha", "LEA");
  }
}

module.exports = Fork;
