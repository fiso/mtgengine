"use strict";
const Constants = require ("../../../Constants");
const SpawningGroundsBase = require("../setC18/SpawningGrounds");

class SpawningGrounds extends SpawningGroundsBase {
  constructor (game) {
    super(game, "Spawning Grounds", "Commander 2013", "C13");
  }
}

module.exports = SpawningGrounds;
