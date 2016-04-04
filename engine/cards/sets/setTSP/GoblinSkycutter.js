"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinSkycutter extends Card {
  constructor(game) {
    super(game, "Goblin Skycutter", "Time Spiral", "TSP");
  }
}

module.exports = GoblinSkycutter;
