"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FlameWaveBase = require("../set9ED/FlameWave.js");

class FlameWave extends FlameWaveBase {
  constructor(game) {
    super(game, "Flame Wave", "Stronghold", "STH");
  }
}

module.exports = FlameWave;
