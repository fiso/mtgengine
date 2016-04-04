"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CultivatorDrone extends UnimplementedCard {
  constructor(game) {
    super(game, "Cultivator Drone", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = CultivatorDrone;
