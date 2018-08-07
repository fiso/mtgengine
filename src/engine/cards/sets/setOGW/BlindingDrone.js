"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlindingDrone extends UnimplementedCard {
  constructor (game) {
    super(game, "Blinding Drone", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = BlindingDrone;
