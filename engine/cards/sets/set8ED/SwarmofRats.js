"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SwarmofRats extends Card {
  constructor(game) {
    super(game, "Swarm of Rats", "Eighth Edition", "8ED");
  }
}

module.exports = SwarmofRats;
