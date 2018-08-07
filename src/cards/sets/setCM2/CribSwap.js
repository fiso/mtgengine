"use strict";
const Constants = require ("../../../Constants");
const CribSwapBase = require("../setC18/CribSwap");

class CribSwap extends CribSwapBase {
  constructor (game) {
    super(game, "Crib Swap", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = CribSwap;
