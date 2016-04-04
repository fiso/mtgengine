"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SproutSwarm extends Card {
  constructor(game) {
    super(game, "Sprout Swarm", "Future Sight", "FUT");
  }
}

module.exports = SproutSwarm;
