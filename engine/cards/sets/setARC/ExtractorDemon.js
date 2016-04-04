"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ExtractorDemon extends Card {
  constructor(game) {
    super(game, "Extractor Demon", "Archenemy", "ARC");
  }
}

module.exports = ExtractorDemon;
