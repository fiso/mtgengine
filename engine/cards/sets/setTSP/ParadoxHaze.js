"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ParadoxHaze extends Card {
  constructor(game) {
    super(game, "Paradox Haze", "Time Spiral", "TSP");
  }
}

module.exports = ParadoxHaze;
