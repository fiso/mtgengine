"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CranialExtraction extends UnimplementedCard {
  constructor (game) {
    super(game, "Cranial Extraction", "Champions of Kamigawa", "CHK");
  }
}

module.exports = CranialExtraction;
