"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DarkHatchling extends Card {
  constructor(game) {
    super(game, "Dark Hatchling", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = DarkHatchling;
