"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PitchburnDevilsBase = require("../setISD/PitchburnDevils.js");

class PitchburnDevils extends PitchburnDevilsBase {
  constructor(game) {
    super(game, "Pitchburn Devils", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = PitchburnDevils;
