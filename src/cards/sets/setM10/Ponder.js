"use strict";
const Constants = require ("../../../Constants");
const PonderBase = require("../setLRW/Ponder");

class Ponder extends PonderBase {
  constructor (game) {
    super(game, "Ponder", "Magic 2010", "M10");
  }
}

module.exports = Ponder;
