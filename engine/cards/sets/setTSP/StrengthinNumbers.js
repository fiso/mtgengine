"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StrengthinNumbers extends Card {
  constructor(game) {
    super(game, "Strength in Numbers", "Time Spiral", "TSP");
  }
}

module.exports = StrengthinNumbers;
