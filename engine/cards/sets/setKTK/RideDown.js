"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RideDown extends Card {
  constructor(game) {
    super(game, "Ride Down", "Khans of Tarkir", "KTK");
  }
}

module.exports = RideDown;
