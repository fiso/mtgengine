"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NoeticScales extends UnimplementedCard {
  constructor(game) {
    super(game, "Noetic Scales", "Urza's Saga", "USG");
  }
}

module.exports = NoeticScales;
