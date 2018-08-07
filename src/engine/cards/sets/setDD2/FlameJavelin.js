"use strict";
const Constants = require ("../../../Constants");
const FlameJavelinBase = require("../setJVC/FlameJavelin");

class FlameJavelin extends FlameJavelinBase {
  constructor (game) {
    super(game, "Flame Javelin", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = FlameJavelin;
