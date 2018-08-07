"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FleetwheelCruiser extends UnimplementedCard {
  constructor (game) {
    super(game, "Fleetwheel Cruiser", "Kaladesh", "KLD");
  }
}

module.exports = FleetwheelCruiser;
