"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DoubleStroke extends UnimplementedCard {
  constructor (game) {
    super(game, "Double Stroke", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = DoubleStroke;
