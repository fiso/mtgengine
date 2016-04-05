"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RideDown extends UnimplementedCard {
  constructor(game) {
    super(game, "Ride Down", "Khans of Tarkir", "KTK");
  }
}

module.exports = RideDown;
