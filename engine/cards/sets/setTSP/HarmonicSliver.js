"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HarmonicSliver extends Card {
  constructor(game) {
    super(game, "Harmonic Sliver", "Time Spiral", "TSP");
  }
}

module.exports = HarmonicSliver;
