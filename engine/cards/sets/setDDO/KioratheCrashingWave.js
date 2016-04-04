"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KioratheCrashingWaveBase = require("../setBNG/KioratheCrashingWave.js");

class KioratheCrashingWave extends KioratheCrashingWaveBase {
  constructor(game) {
    super(game, "Kiora, the Crashing Wave", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = KioratheCrashingWave;
