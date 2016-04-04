"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RealityShift extends Card {
  constructor(game) {
    super(game, "Reality Shift", "Fate Reforged", "FRF");
  }
}

module.exports = RealityShift;
