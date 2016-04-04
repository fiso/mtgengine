"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UnexpectedPotential extends Card {
  constructor(game) {
    super(game, "Unexpected Potential", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = UnexpectedPotential;
