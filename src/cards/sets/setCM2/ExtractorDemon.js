"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ExtractorDemon extends UnimplementedCard {
  constructor (game) {
    super(game, "Extractor Demon", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = ExtractorDemon;
