"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ClockworkSwarm extends Card {
  constructor(game) {
    super(game, "Clockwork Swarm", "Homelands", "HML");
  }
}

module.exports = ClockworkSwarm;
