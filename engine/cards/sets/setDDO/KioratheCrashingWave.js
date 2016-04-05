"use strict";
const Constants = require ("../../../Constants");
const KioratheCrashingWaveBase = require("../setBNG/KioratheCrashingWave");

class KioratheCrashingWave extends KioratheCrashingWaveBase {
  constructor(game) {
    super(game, "Kiora, the Crashing Wave", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = KioratheCrashingWave;
