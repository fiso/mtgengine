"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AuraExtraction extends Card {
  constructor(game) {
    super(game, "Aura Extraction", "Onslaught", "ONS");
  }
}

module.exports = AuraExtraction;
