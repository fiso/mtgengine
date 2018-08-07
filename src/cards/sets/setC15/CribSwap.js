"use strict";
const Constants = require ("../../../Constants");
const CribSwapBase = require("../setC18/CribSwap");

class CribSwap extends CribSwapBase {
  constructor (game) {
    super(game, "Crib Swap", "Commander 2015", "C15");
  }
}

module.exports = CribSwap;
