"use strict";
const Constants = require ("../../../Constants");
const PlagiarizeBase = require("../set9ED/Plagiarize");

class Plagiarize extends PlagiarizeBase {
  constructor(game) {
    super(game, "Plagiarize", "Torment", "TOR");
  }
}

module.exports = Plagiarize;
