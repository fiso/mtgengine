"use strict";
const Constants = require ("../../../Constants");
const StormCrowBase = require("../setTUST/StormCrow");

class StormCrow extends StormCrowBase {
  constructor (game) {
    super(game, "Storm Crow", "Portal", "POR");
  }
}

module.exports = StormCrow;
