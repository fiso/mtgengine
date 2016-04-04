"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Swarmyard extends Card {
  constructor(game) {
    super(game, "Swarmyard", "Time Spiral", "TSP");
  }
}

module.exports = Swarmyard;
