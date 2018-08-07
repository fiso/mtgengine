"use strict";
const Constants = require ("../../../Constants");
const SoulManipulationBase = require("../setMM3/SoulManipulation");

class SoulManipulation extends SoulManipulationBase {
  constructor (game) {
    super(game, "Soul Manipulation", "Alara Reborn", "ARB");
  }
}

module.exports = SoulManipulation;
