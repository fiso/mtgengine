"use strict";
const Constants = require ("../../../Constants");
const CarrionBeetlesBase = require("../setWC99/CarrionBeetles");

class CarrionBeetles extends CarrionBeetlesBase {
  constructor (game) {
    super(game, "Carrion Beetles", "Urza's Saga", "USG");
  }
}

module.exports = CarrionBeetles;
