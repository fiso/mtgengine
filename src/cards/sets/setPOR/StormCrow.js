"use strict";
const Constants = require ("../../../Constants");
const StormCrowBase = require("../setALL/StormCrow");

class StormCrow extends StormCrowBase {
  constructor (game) {
    super(game, "Storm Crow", "Portal", "POR");
  }
}

module.exports = StormCrow;
