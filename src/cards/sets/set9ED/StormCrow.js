"use strict";
const Constants = require ("../../../Constants");
const StormCrowBase = require("../setALL/StormCrow");

class StormCrow extends StormCrowBase {
  constructor (game) {
    super(game, "Storm Crow", "Ninth Edition", "9ED");
  }
}

module.exports = StormCrow;
