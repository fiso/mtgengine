"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ClockworkSwarm extends UnimplementedCard {
  constructor (game) {
    super(game, "Clockwork Swarm", "Masters Edition IV", "ME4");
  }
}

module.exports = ClockworkSwarm;
