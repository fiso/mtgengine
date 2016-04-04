"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CarrionBeetles extends Card {
  constructor(game) {
    super(game, "Carrion Beetles", "Urza's Saga", "USG");
  }
}

module.exports = CarrionBeetles;
