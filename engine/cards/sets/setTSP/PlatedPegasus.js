"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PlatedPegasus extends Card {
  constructor(game) {
    super(game, "Plated Pegasus", "Time Spiral", "TSP");
  }
}

module.exports = PlatedPegasus;
