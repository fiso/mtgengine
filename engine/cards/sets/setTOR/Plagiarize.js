"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PlagiarizeBase = require("../set9ED/Plagiarize.js");

class Plagiarize extends PlagiarizeBase {
  constructor(game) {
    super(game, "Plagiarize", "Torment", "TOR");
  }
}

module.exports = Plagiarize;
