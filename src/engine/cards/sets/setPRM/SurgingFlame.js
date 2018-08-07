"use strict";
const Constants = require ("../../../Constants");
const SurgingFlameBase = require("../setCSP/SurgingFlame");

class SurgingFlame extends SurgingFlameBase {
  constructor (game) {
    super(game, "Surging Flame", "Magic Online Promos", "PRM");
  }
}

module.exports = SurgingFlame;
