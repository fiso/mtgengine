"use strict";
const Constants = require ("../../../Constants");
const BiorhythmBase = require("../set9ED/Biorhythm");

class Biorhythm extends BiorhythmBase {
  constructor (game) {
    super(game, "Biorhythm", "Onslaught", "ONS");
  }
}

module.exports = Biorhythm;
