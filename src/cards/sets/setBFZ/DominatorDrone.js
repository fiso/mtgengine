"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DominatorDrone extends UnimplementedCard {
  constructor (game) {
    super(game, "Dominator Drone", "Battle for Zendikar", "BFZ");
  }
}

module.exports = DominatorDrone;
