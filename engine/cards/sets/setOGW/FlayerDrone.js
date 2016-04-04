"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FlayerDrone extends Card {
  constructor(game) {
    super(game, "Flayer Drone", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = FlayerDrone;
