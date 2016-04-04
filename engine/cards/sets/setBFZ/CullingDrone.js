"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CullingDrone extends Card {
  constructor(game) {
    super(game, "Culling Drone", "Battle for Zendikar", "BFZ");
  }
}

module.exports = CullingDrone;
