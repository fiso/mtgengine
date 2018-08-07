"use strict";
const Constants = require ("../../../Constants");
const PonderBase = require("../setC18/Ponder");

class Ponder extends PonderBase {
  constructor (game) {
    super(game, "Ponder", "Lorwyn", "LRW");
  }
}

module.exports = Ponder;
