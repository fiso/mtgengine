"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EssenceExtraction extends UnimplementedCard {
  constructor (game) {
    super(game, "Essence Extraction", "Kaladesh", "KLD");
  }
}

module.exports = EssenceExtraction;
