"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ReaverDrone extends UnimplementedCard {
  constructor(game) {
    super(game, "Reaver Drone", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = ReaverDrone;
