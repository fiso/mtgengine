"use strict";
const Constants = require ("../../../Constants");
const TritonTacticsBase = require("../setDDT/TritonTactics");

class TritonTactics extends TritonTacticsBase {
  constructor (game) {
    super(game, "Triton Tactics", "Theros", "THS");
  }
}

module.exports = TritonTactics;
