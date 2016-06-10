"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ClockworkSwarm extends UnimplementedCard {
  constructor (game) {
    super(game, "Clockwork Swarm", "Homelands", "HML");
  }
}

module.exports = ClockworkSwarm;
