"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WheelofFate extends UnimplementedCard {
  constructor (game) {
    super(game, "Wheel of Fate", "Time Spiral", "TSP");
  }
}

module.exports = WheelofFate;
