"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WheelofFate extends Card {
  constructor(game) {
    super(game, "Wheel of Fate", "Time Spiral", "TSP");
  }
}

module.exports = WheelofFate;
