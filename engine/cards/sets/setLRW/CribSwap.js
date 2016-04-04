"use strict";
const Constants = require ("../../../Constants");
const CribSwapBase = require("../setC15/CribSwap");

class CribSwap extends CribSwapBase {
  constructor(game) {
    super(game, "Crib Swap", "Lorwyn", "LRW");
  }
}

module.exports = CribSwap;
