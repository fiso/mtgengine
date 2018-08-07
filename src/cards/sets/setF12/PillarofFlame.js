"use strict";
const Constants = require ("../../../Constants");
const PillarofFlameBase = require("../setIMA/PillarofFlame");

class PillarofFlame extends PillarofFlameBase {
  constructor (game) {
    super(game, "Pillar of Flame", "Friday Night Magic 2012", "F12");
  }
}

module.exports = PillarofFlame;
