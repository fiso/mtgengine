"use strict";
const Constants = require ("../../../Constants");
const SurgingFlameBase = require("../setCSP/SurgingFlame");

class SurgingFlame extends SurgingFlameBase {
  constructor (game) {
    super(game, "Surging Flame", "Arena League 2006", "PAL06");
  }
}

module.exports = SurgingFlame;
