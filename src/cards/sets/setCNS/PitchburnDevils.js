"use strict";
const Constants = require ("../../../Constants");
const PitchburnDevilsBase = require("../setISD/PitchburnDevils");

class PitchburnDevils extends PitchburnDevilsBase {
  constructor (game) {
    super(game, "Pitchburn Devils", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = PitchburnDevils;
