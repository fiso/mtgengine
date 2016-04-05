"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarkHatchling extends UnimplementedCard {
  constructor(game) {
    super(game, "Dark Hatchling", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = DarkHatchling;
