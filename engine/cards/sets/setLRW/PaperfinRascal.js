"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PaperfinRascal extends Card {
  constructor(game) {
    super(game, "Paperfin Rascal", "Lorwyn", "LRW");
  }
}

module.exports = PaperfinRascal;
