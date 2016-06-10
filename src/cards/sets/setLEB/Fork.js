"use strict";
const Constants = require ("../../../Constants");
const ForkBase = require("../setCED/Fork");

class Fork extends ForkBase {
  constructor (game) {
    super(game, "Fork", "Limited Edition Beta", "LEB");
  }
}

module.exports = Fork;
