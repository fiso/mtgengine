"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TolarianSentinel extends Card {
  constructor(game) {
    super(game, "Tolarian Sentinel", "Time Spiral", "TSP");
  }
}

module.exports = TolarianSentinel;
