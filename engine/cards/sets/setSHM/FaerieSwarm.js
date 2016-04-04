"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FaerieSwarm extends UnimplementedCard {
  constructor(game) {
    super(game, "Faerie Swarm", "Shadowmoor", "SHM");
  }
}

module.exports = FaerieSwarm;
