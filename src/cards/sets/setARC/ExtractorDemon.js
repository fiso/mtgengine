"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ExtractorDemon extends UnimplementedCard {
  constructor (game) {
    super(game, "Extractor Demon", "Archenemy", "ARC");
  }
}

module.exports = ExtractorDemon;
