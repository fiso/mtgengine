"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SurgicalExtraction extends UnimplementedCard {
  constructor (game) {
    super(game, "Surgical Extraction", "Modern Masters 2015", "MM2");
  }
}

module.exports = SurgicalExtraction;
