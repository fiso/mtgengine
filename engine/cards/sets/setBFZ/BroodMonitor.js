"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BroodMonitor extends Card {
  constructor(game) {
    super(game, "Brood Monitor", "Battle for Zendikar", "BFZ");
  }
}

module.exports = BroodMonitor;
