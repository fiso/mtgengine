"use strict";
const Constants = require ("../../../Constants");
const CouncilsJudgmentBase = require("../setVMA/CouncilsJudgment");

class CouncilsJudgment extends CouncilsJudgmentBase {
  constructor (game) {
    super(game, "Council's Judgment", "Conspiracy", "CNS");
  }
}

module.exports = CouncilsJudgment;
