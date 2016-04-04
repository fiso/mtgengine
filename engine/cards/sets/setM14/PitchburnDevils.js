"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PitchburnDevilsBase = require("../setISD/PitchburnDevils.js");

class PitchburnDevils extends PitchburnDevilsBase {
  constructor(game) {
    super(game, "Pitchburn Devils", "Magic 2014 Core Set", "M14");
  }
}

module.exports = PitchburnDevils;
