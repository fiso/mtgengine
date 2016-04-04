"use strict";
const Constants = require ("../../../Constants");
const StormCrowBase = require("../setALL/StormCrow");

class StormCrow extends StormCrowBase {
  constructor(game) {
    super(game, "Storm Crow", "Starter 1999", "S99");
  }
}

module.exports = StormCrow;
