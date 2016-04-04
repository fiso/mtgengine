"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SlaughterDrone extends Card {
  constructor(game) {
    super(game, "Slaughter Drone", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = SlaughterDrone;
