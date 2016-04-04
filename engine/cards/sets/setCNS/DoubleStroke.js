"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DoubleStroke extends Card {
  constructor(game) {
    super(game, "Double Stroke", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = DoubleStroke;
