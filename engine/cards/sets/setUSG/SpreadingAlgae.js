"use strict";
const Constants = require ("../../../Constants");
const SpreadingAlgaeBase = require("../set8ED/SpreadingAlgae");

class SpreadingAlgae extends SpreadingAlgaeBase {
  constructor(game) {
    super(game, "Spreading Algae", "Urza's Saga", "USG");
  }
}

module.exports = SpreadingAlgae;
