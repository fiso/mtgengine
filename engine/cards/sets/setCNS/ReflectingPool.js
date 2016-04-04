"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ReflectingPool extends Card {
  constructor(game) {
    super(game, "Reflecting Pool", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = ReflectingPool;
