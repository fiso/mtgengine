"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SturdyHatchling extends UnimplementedCard {
  constructor(game) {
    super(game, "Sturdy Hatchling", "Eventide", "EVE");
  }
}

module.exports = SturdyHatchling;
