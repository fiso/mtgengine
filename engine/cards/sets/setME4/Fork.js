"use strict";
const Constants = require ("../../../Constants");
const ForkBase = require("../setCED/Fork");

class Fork extends ForkBase {
  constructor(game) {
    super(game, "Fork", "Masters Edition IV", "ME4");
  }
}

module.exports = Fork;
