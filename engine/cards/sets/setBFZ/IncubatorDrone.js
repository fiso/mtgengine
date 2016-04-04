"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IncubatorDrone extends UnimplementedCard {
  constructor(game) {
    super(game, "Incubator Drone", "Battle for Zendikar", "BFZ");
  }
}

module.exports = IncubatorDrone;
