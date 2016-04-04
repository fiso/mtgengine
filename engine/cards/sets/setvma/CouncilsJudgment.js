"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CouncilsJudgmentBase = require("../setCNS/CouncilsJudgment.js");

class CouncilsJudgment extends CouncilsJudgmentBase {
  constructor(game) {
    super(game, "Council's Judgment", "Vintage Masters", "VMA");
  }
}

module.exports = CouncilsJudgment;
