"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IncubatorDrone extends Card {
  constructor(game) {
    super(game, "Incubator Drone", "Battle for Zendikar", "BFZ");
  }
}

module.exports = IncubatorDrone;
