"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SuddenDeath extends Card {
  constructor(game) {
    super(game, "Sudden Death", "Time Spiral", "TSP");
  }
}

module.exports = SuddenDeath;
