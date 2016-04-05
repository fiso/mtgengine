"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SulfuricVapors extends UnimplementedCard {
  constructor(game) {
    super(game, "Sulfuric Vapors", "Urza's Saga", "USG");
  }
}

module.exports = SulfuricVapors;
