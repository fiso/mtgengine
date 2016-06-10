"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnexpectedPotential extends UnimplementedCard {
  constructor (game) {
    super(game, "Unexpected Potential", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = UnexpectedPotential;
