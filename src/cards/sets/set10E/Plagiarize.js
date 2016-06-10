"use strict";
const Constants = require ("../../../Constants");
const PlagiarizeBase = require("../set9ED/Plagiarize");

class Plagiarize extends PlagiarizeBase {
  constructor (game) {
    super(game, "Plagiarize", "Tenth Edition", "10E");
  }
}

module.exports = Plagiarize;
