"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SurgicalExtraction extends Card {
  constructor(game) {
    super(game, "Surgical Extraction", "Media Inserts", "pMEI");
  }
}

module.exports = SurgicalExtraction;
