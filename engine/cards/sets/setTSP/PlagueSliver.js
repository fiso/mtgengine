"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PlagueSliver extends Card {
  constructor(game) {
    super(game, "Plague Sliver", "Time Spiral", "TSP");
  }
}

module.exports = PlagueSliver;
