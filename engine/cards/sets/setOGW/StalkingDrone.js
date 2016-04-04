"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StalkingDrone extends UnimplementedCard {
  constructor(game) {
    super(game, "Stalking Drone", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = StalkingDrone;
