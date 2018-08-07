"use strict";
const Constants = require ("../../../Constants");
const RideDownBase = require("../setEMN/RideDown");

class RideDown extends RideDownBase {
  constructor (game) {
    super(game, "Ride Down", "Khans of Tarkir", "KTK");
  }
}

module.exports = RideDown;
