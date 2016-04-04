"use strict";
const Constants = require ("../../../Constants");
const FlameJavelinBase = require("../setDD3_JVC/FlameJavelin");

class FlameJavelin extends FlameJavelinBase {
  constructor(game) {
    super(game, "Flame Javelin", "Shadowmoor", "SHM");
  }
}

module.exports = FlameJavelin;
