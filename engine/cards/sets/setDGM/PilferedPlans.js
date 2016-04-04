"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PilferedPlans extends Card {
  constructor(game) {
    super(game, "Pilfered Plans", "Dragon's Maze", "DGM");
  }
}

module.exports = PilferedPlans;
