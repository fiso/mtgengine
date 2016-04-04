"use strict";
const Constants = require ("../../../Constants");
const RadiantsJudgmentBase = require("../setULG/RadiantsJudgment");

class RadiantsJudgment extends RadiantsJudgmentBase {
  constructor(game) {
    super(game, "Radiant's Judgment", "Vintage Masters", "VMA");
  }
}

module.exports = RadiantsJudgment;
