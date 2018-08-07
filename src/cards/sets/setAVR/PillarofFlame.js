"use strict";
const Constants = require ("../../../Constants");
const PillarofFlameBase = require("../setIMA/PillarofFlame");

class PillarofFlame extends PillarofFlameBase {
  constructor (game) {
    super(game, "Pillar of Flame", "Avacyn Restored", "AVR");
  }
}

module.exports = PillarofFlame;
