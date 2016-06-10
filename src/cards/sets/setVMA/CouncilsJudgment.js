"use strict";
const Constants = require ("../../../Constants");
const CouncilsJudgmentBase = require("../setCNS/CouncilsJudgment");

class CouncilsJudgment extends CouncilsJudgmentBase {
  constructor (game) {
    super(game, "Council's Judgment", "Vintage Masters", "VMA");
  }
}

module.exports = CouncilsJudgment;
