"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CribSwapBase = require("../setC15/CribSwap.js");

class CribSwap extends CribSwapBase {
  constructor(game) {
    super(game, "Crib Swap", "Lorwyn", "LRW");
  }
}

module.exports = CribSwap;
