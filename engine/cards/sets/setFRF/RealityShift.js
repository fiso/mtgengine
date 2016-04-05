"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RealityShift extends UnimplementedCard {
  constructor(game) {
    super(game, "Reality Shift", "Fate Reforged", "FRF");
  }
}

module.exports = RealityShift;
