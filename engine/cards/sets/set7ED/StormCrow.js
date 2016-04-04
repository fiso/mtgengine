"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StormCrowBase = require("../setALL/StormCrow.js");

class StormCrow extends StormCrowBase {
  constructor(game) {
    super(game, "Storm Crow", "Seventh Edition", "7ED");
  }
}

module.exports = StormCrow;
