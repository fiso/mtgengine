"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpiritLoop extends Card {
  constructor(game) {
    super(game, "Spirit Loop", "Time Spiral", "TSP");
  }
}

module.exports = SpiritLoop;
