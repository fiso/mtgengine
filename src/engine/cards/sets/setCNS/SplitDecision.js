"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SplitDecision extends UnimplementedCard {
  constructor (game) {
    super(game, "Split Decision", "Conspiracy", "CNS");
  }
}

module.exports = SplitDecision;
