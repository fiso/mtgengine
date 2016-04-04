"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ChordofCallingBase = require("../setM15/ChordofCalling.js");

class ChordofCalling extends ChordofCallingBase {
  constructor(game) {
    super(game, "Chord of Calling", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = ChordofCalling;
