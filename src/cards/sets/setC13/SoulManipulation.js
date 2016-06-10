"use strict";
const Constants = require ("../../../Constants");
const SoulManipulationBase = require("../setARB/SoulManipulation");

class SoulManipulation extends SoulManipulationBase {
  constructor (game) {
    super(game, "Soul Manipulation", "Commander 2013 Edition", "C13");
  }
}

module.exports = SoulManipulation;
