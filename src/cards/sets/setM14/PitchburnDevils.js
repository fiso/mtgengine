"use strict";
const Constants = require ("../../../Constants");
const PitchburnDevilsBase = require("../setISD/PitchburnDevils");

class PitchburnDevils extends PitchburnDevilsBase {
  constructor (game) {
    super(game, "Pitchburn Devils", "Magic 2014 Core Set", "M14");
  }
}

module.exports = PitchburnDevils;
