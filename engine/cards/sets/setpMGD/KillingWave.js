"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KillingWaveBase = require("../setAVR/KillingWave.js");

class KillingWave extends KillingWaveBase {
  constructor(game) {
    super(game, "Killing Wave", "Magic Game Day", "pMGD");
  }
}

module.exports = KillingWave;
