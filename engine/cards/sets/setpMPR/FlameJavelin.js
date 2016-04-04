"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FlameJavelinBase = require("../setDD3_JVC/FlameJavelin.js");

class FlameJavelin extends FlameJavelinBase {
  constructor(game) {
    super(game, "Flame Javelin", "Magic Player Rewards", "pMPR");
  }
}

module.exports = FlameJavelin;
