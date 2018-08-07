"use strict";
const Constants = require ("../../../Constants");
const FlameJavelinBase = require("../setJVC/FlameJavelin");

class FlameJavelin extends FlameJavelinBase {
  constructor (game) {
    super(game, "Flame Javelin", "Magic Player Rewards 2009", "P09");
  }
}

module.exports = FlameJavelin;
