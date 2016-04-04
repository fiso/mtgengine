"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KorozdaMonitor extends Card {
  constructor(game) {
    super(game, "Korozda Monitor", "Return to Ravnica", "RTR");
  }
}

module.exports = KorozdaMonitor;
