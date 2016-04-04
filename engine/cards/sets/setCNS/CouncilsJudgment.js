"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CouncilsJudgment extends Card {
  constructor(game) {
    super(game, "Council's Judgment", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = CouncilsJudgment;
