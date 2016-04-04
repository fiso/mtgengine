"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TelekineticSliver extends Card {
  constructor(game) {
    super(game, "Telekinetic Sliver", "Time Spiral", "TSP");
  }
}

module.exports = TelekineticSliver;
