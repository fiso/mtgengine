"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FaerieSwarm extends Card {
  constructor(game) {
    super(game, "Faerie Swarm", "Shadowmoor", "SHM");
  }
}

module.exports = FaerieSwarm;
