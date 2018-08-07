"use strict";
const Constants = require ("../../../Constants");
const FlameJavelinBase = require("../setJVC/FlameJavelin");

class FlameJavelin extends FlameJavelinBase {
  constructor (game) {
    super(game, "Flame Javelin", "Magic Online Promos", "PRM");
  }
}

module.exports = FlameJavelin;
