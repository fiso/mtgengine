"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpontaneousCombustion extends Card {
  constructor(game) {
    super(game, "Spontaneous Combustion", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = SpontaneousCombustion;
