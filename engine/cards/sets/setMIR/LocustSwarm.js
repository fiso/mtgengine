"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LocustSwarm extends Card {
  constructor(game) {
    super(game, "Locust Swarm", "Mirage", "MIR");
  }
}

module.exports = LocustSwarm;
