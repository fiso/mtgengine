"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ForsakenCity extends Card {
  constructor(game) {
    super(game, "Forsaken City", "Planeshift", "PLS");
  }
}

module.exports = ForsakenCity;
