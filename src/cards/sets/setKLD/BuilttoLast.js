"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BuilttoLast extends UnimplementedCard {
  constructor (game) {
    super(game, "Built to Last", "Kaladesh", "KLD");
  }
}

module.exports = BuilttoLast;
