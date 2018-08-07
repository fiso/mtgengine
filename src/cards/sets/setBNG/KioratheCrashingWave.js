"use strict";
const Constants = require ("../../../Constants");
const KioratheCrashingWaveBase = require("../setDDO/KioratheCrashingWave");

class KioratheCrashingWave extends KioratheCrashingWaveBase {
  constructor (game) {
    super(game, "Kiora, the Crashing Wave", "Born of the Gods", "BNG");
  }
}

module.exports = KioratheCrashingWave;
