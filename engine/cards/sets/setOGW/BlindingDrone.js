"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlindingDrone extends Card {
  constructor(game) {
    super(game, "Blinding Drone", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = BlindingDrone;
