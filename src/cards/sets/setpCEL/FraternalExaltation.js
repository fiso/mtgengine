"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FraternalExaltation extends UnimplementedCard {
  constructor(game) {
    super(game, "Fraternal Exaltation", "Celebration", "pCEL");
  }
}

module.exports = FraternalExaltation;
