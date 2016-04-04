"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BiorhythmBase = require("../set9ED/Biorhythm.js");

class Biorhythm extends BiorhythmBase {
  constructor(game) {
    super(game, "Biorhythm", "Onslaught", "ONS");
  }
}

module.exports = Biorhythm;
