"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StormCrowBase = require("../setALL/StormCrow.js");

class StormCrow extends StormCrowBase {
  constructor(game) {
    super(game, "Storm Crow", "Classic Sixth Edition", "6ED");
  }
}

module.exports = StormCrow;
