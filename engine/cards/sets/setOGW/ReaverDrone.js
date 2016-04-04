"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ReaverDrone extends Card {
  constructor(game) {
    super(game, "Reaver Drone", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = ReaverDrone;
