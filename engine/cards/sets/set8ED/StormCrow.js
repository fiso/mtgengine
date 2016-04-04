"use strict";
const Constants = require ("../../../Constants");
const StormCrowBase = require("../setALL/StormCrow");

class StormCrow extends StormCrowBase {
  constructor(game) {
    super(game, "Storm Crow", "Eighth Edition", "8ED");
  }
}

module.exports = StormCrow;
