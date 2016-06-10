"use strict";
const Constants = require ("../../../Constants");
const ChordofCallingBase = require("../setM15/ChordofCalling");

class ChordofCalling extends ChordofCallingBase {
  constructor (game) {
    super(game, "Chord of Calling", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = ChordofCalling;
