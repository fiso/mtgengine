"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AcidicSoil extends Card {
  constructor(game) {
    super(game, "Acidic Soil", "Urza's Saga", "USG");
  }
}

module.exports = AcidicSoil;
