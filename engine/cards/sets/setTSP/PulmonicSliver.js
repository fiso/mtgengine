"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PulmonicSliver extends Card {
  constructor(game) {
    super(game, "Pulmonic Sliver", "Time Spiral", "TSP");
  }
}

module.exports = PulmonicSliver;
