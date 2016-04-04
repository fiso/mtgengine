"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SinisterStrength extends Card {
  constructor(game) {
    super(game, "Sinister Strength", "Planeshift", "PLS");
  }
}

module.exports = SinisterStrength;
