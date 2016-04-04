"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GroundRift extends Card {
  constructor(game) {
    super(game, "Ground Rift", "Time Spiral", "TSP");
  }
}

module.exports = GroundRift;
