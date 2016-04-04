"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KeldonMantle extends Card {
  constructor(game) {
    super(game, "Keldon Mantle", "Planeshift", "PLS");
  }
}

module.exports = KeldonMantle;
