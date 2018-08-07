"use strict";
const Constants = require ("../../../Constants");
const KioratheCrashingWaveBase = require("../setDDO/KioratheCrashingWave");

class KioratheCrashingWave extends KioratheCrashingWaveBase {
  constructor (game) {
    super(game, "Kiora, the Crashing Wave", "Magic Online Promos", "PRM");
  }
}

module.exports = KioratheCrashingWave;
