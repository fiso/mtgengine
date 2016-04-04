"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Raze extends UnimplementedCard {
  constructor(game) {
    super(game, "Raze", "Urza's Saga", "USG");
  }
}

module.exports = Raze;
