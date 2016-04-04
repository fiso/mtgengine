"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CoastalDiscovery extends Card {
  constructor(game) {
    super(game, "Coastal Discovery", "Battle for Zendikar", "BFZ");
  }
}

module.exports = CoastalDiscovery;
