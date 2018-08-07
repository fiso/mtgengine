"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AuraExtraction extends UnimplementedCard {
  constructor (game) {
    super(game, "Aura Extraction", "Onslaught", "ONS");
  }
}

module.exports = AuraExtraction;
