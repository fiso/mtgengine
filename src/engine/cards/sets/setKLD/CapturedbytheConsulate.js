"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CapturedbytheConsulate extends UnimplementedCard {
  constructor (game) {
    super(game, "Captured by the Consulate", "Kaladesh", "KLD");
  }
}

module.exports = CapturedbytheConsulate;
