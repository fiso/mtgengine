"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LocustSwarm extends UnimplementedCard {
  constructor (game) {
    super(game, "Locust Swarm", "Mirage", "MIR");
  }
}

module.exports = LocustSwarm;
