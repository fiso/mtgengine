"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NaturesClaim extends UnimplementedCard {
  constructor(game) {
    super(game, "Nature's Claim", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = NaturesClaim;
