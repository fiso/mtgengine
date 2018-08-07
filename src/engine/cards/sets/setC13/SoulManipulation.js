"use strict";
const Constants = require ("../../../Constants");
const SoulManipulationBase = require("../setMM3/SoulManipulation");

class SoulManipulation extends SoulManipulationBase {
  constructor (game) {
    super(game, "Soul Manipulation", "Commander 2013", "C13");
  }
}

module.exports = SoulManipulation;
