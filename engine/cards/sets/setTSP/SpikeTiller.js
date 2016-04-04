"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpikeTiller extends Card {
  constructor(game) {
    super(game, "Spike Tiller", "Time Spiral", "TSP");
  }
}

module.exports = SpikeTiller;
