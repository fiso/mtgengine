"use strict";
const Constants = require ("../../../Constants");
const PillarofFlameBase = require("../setAVR/PillarofFlame");

class PillarofFlame extends PillarofFlameBase {
  constructor (game) {
    super(game, "Pillar of Flame", "Friday Night Magic", "pFNM");
  }
}

module.exports = PillarofFlame;
