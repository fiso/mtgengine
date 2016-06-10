"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CarrionBeetles extends UnimplementedCard {
  constructor (game) {
    super(game, "Carrion Beetles", "Urza's Saga", "USG");
  }
}

module.exports = CarrionBeetles;
