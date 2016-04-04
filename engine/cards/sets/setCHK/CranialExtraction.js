"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CranialExtraction extends Card {
  constructor(game) {
    super(game, "Cranial Extraction", "Champions of Kamigawa", "CHK");
  }
}

module.exports = CranialExtraction;
