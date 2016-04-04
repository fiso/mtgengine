"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StalkingDrone extends Card {
  constructor(game) {
    super(game, "Stalking Drone", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = StalkingDrone;
