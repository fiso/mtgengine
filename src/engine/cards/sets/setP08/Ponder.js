"use strict";
const Constants = require ("../../../Constants");
const PonderBase = require("../setC18/Ponder");

class Ponder extends PonderBase {
  constructor (game) {
    super(game, "Ponder", "Magic Player Rewards 2008", "P08");
  }
}

module.exports = Ponder;
