"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CullingDrone extends UnimplementedCard {
  constructor(game) {
    super(game, "Culling Drone", "Battle for Zendikar", "BFZ");
  }
}

module.exports = CullingDrone;
