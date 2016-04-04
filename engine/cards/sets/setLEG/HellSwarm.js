"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HellSwarm extends Card {
  constructor(game) {
    super(game, "Hell Swarm", "Legends", "LEG");
  }
}

module.exports = HellSwarm;
