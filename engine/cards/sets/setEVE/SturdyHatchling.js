"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SturdyHatchling extends Card {
  constructor(game) {
    super(game, "Sturdy Hatchling", "Eventide", "EVE");
  }
}

module.exports = SturdyHatchling;
