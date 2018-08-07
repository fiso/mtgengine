"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnexpectedPotential extends UnimplementedCard {
  constructor (game) {
    super(game, "Unexpected Potential", "Conspiracy", "CNS");
  }
}

module.exports = UnexpectedPotential;
