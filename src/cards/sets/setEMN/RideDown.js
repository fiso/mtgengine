"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RideDown extends UnimplementedCard {
  constructor (game) {
    super(game, "Ride Down", "Eldritch Moon", "EMN");
  }
}

module.exports = RideDown;
