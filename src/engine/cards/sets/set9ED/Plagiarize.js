"use strict";
const Constants = require ("../../../Constants");
const PlagiarizeBase = require("../set10E/Plagiarize");

class Plagiarize extends PlagiarizeBase {
  constructor (game) {
    super(game, "Plagiarize", "Ninth Edition", "9ED");
  }
}

module.exports = Plagiarize;
