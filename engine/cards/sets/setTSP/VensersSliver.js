"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VensersSliver extends Card {
  constructor(game) {
    super(game, "Venser's Sliver", "Time Spiral", "TSP");
  }
}

module.exports = VensersSliver;
