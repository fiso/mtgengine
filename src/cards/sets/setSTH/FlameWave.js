"use strict";
const Constants = require ("../../../Constants");
const FlameWaveBase = require("../setTPR/FlameWave");

class FlameWave extends FlameWaveBase {
  constructor (game) {
    super(game, "Flame Wave", "Stronghold", "STH");
  }
}

module.exports = FlameWave;
