"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PollenRemedy extends Card {
  constructor(game) {
    super(game, "Pollen Remedy", "Planeshift", "PLS");
  }
}

module.exports = PollenRemedy;
