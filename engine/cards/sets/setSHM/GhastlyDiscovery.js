"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GhastlyDiscovery extends Card {
  constructor(game) {
    super(game, "Ghastly Discovery", "Shadowmoor", "SHM");
  }
}

module.exports = GhastlyDiscovery;
