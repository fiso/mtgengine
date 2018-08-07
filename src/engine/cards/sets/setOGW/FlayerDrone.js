"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlayerDrone extends UnimplementedCard {
  constructor (game) {
    super(game, "Flayer Drone", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = FlayerDrone;
