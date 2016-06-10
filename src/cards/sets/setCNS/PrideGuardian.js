"use strict";
const Constants = require ("../../../Constants");
const PrideGuardianBase = require("../setM12/PrideGuardian");

class PrideGuardian extends PrideGuardianBase {
  constructor (game) {
    super(game, "Pride Guardian", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = PrideGuardian;
