"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SplitDecision extends UnimplementedCard {
  constructor(game) {
    super(game, "Split Decision", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = SplitDecision;
