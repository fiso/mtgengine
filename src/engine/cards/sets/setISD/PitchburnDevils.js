"use strict";
const Constants = require ("../../../Constants");
const PitchburnDevilsBase = require("../setCNS/PitchburnDevils");

class PitchburnDevils extends PitchburnDevilsBase {
  constructor (game) {
    super(game, "Pitchburn Devils", "Innistrad", "ISD");
  }
}

module.exports = PitchburnDevils;
