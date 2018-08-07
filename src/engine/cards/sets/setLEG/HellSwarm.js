"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HellSwarm extends UnimplementedCard {
  constructor (game) {
    super(game, "Hell Swarm", "Legends", "LEG");
  }
}

module.exports = HellSwarm;
