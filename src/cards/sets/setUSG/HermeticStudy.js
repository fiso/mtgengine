"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HermeticStudy extends UnimplementedCard {
  constructor(game) {
    super(game, "Hermetic Study", "Urza's Saga", "USG");
  }
}

module.exports = HermeticStudy;
