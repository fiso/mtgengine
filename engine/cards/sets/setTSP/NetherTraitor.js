"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NetherTraitor extends Card {
  constructor(game) {
    super(game, "Nether Traitor", "Time Spiral", "TSP");
  }
}

module.exports = NetherTraitor;
