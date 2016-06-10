"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CouncilsJudgment extends UnimplementedCard {
  constructor (game) {
    super(game, "Council's Judgment", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = CouncilsJudgment;
