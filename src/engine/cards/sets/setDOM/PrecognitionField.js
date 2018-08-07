"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PrecognitionField extends UnimplementedCard {
  constructor (game) {
    super(game, "Precognition Field", "Dominaria", "DOM");
  }
}

module.exports = PrecognitionField;
