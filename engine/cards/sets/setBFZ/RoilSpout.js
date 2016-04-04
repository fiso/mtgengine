"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RoilSpout extends Card {
  constructor(game) {
    super(game, "Roil Spout", "Battle for Zendikar", "BFZ");
  }
}

module.exports = RoilSpout;
