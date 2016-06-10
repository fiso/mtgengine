"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SurgicalExtraction extends UnimplementedCard {
  constructor (game) {
    super(game, "Surgical Extraction", "Media Inserts", "pMEI");
  }
}

module.exports = SurgicalExtraction;
