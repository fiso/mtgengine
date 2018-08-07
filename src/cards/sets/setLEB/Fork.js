"use strict";
const Constants = require ("../../../Constants");
const ForkBase = require("../setME4/Fork");

class Fork extends ForkBase {
  constructor (game) {
    super(game, "Fork", "Limited Edition Beta", "LEB");
  }
}

module.exports = Fork;
