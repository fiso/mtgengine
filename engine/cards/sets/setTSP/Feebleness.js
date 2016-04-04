"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Feebleness extends Card {
  constructor(game) {
    super(game, "Feebleness", "Time Spiral", "TSP");
  }
}

module.exports = Feebleness;
