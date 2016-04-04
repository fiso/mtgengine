"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ScreechingSliver extends Card {
  constructor(game) {
    super(game, "Screeching Sliver", "Time Spiral", "TSP");
  }
}

module.exports = ScreechingSliver;
