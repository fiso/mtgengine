"use strict";
const Constants = require ("../../../Constants");
const KillingWaveBase = require("../setAVR/KillingWave");

class KillingWave extends KillingWaveBase {
  constructor (game) {
    super(game, "Killing Wave", "Magic Game Day", "pMGD");
  }
}

module.exports = KillingWave;
