"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BuilttoSmash extends UnimplementedCard {
  constructor (game) {
    super(game, "Built to Smash", "Kaladesh", "KLD");
  }
}

module.exports = BuilttoSmash;
