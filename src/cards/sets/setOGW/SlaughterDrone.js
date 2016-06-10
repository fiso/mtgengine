"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SlaughterDrone extends UnimplementedCard {
  constructor (game) {
    super(game, "Slaughter Drone", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = SlaughterDrone;
