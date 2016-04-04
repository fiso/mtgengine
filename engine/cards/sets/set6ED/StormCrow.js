"use strict";
const Constants = require ("../../../Constants");
const StormCrowBase = require("../setALL/StormCrow");

class StormCrow extends StormCrowBase {
  constructor(game) {
    super(game, "Storm Crow", "Classic Sixth Edition", "6ED");
  }
}

module.exports = StormCrow;
