"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DominatorDrone extends Card {
  constructor(game) {
    super(game, "Dominator Drone", "Battle for Zendikar", "BFZ");
  }
}

module.exports = DominatorDrone;
