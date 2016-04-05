"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DoubleNegative extends UnimplementedCard {
  constructor(game) {
    super(game, "Double Negative", "Alara Reborn", "ARB");
  }
}

module.exports = DoubleNegative;
