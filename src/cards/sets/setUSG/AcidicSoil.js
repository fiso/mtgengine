"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AcidicSoil extends UnimplementedCard {
  constructor (game) {
    super(game, "Acidic Soil", "Urza's Saga", "USG");
  }
}

module.exports = AcidicSoil;
