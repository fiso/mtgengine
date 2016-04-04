"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PrideGuardianBase = require("../setM12/PrideGuardian.js");

class PrideGuardian extends PrideGuardianBase {
  constructor(game) {
    super(game, "Pride Guardian", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = PrideGuardian;
