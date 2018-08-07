"use strict";
const Constants = require ("../../../Constants");
const RadiantsJudgmentBase = require("../setVMA/RadiantsJudgment");

class RadiantsJudgment extends RadiantsJudgmentBase {
  constructor (game) {
    super(game, "Radiant's Judgment", "Urza's Legacy", "ULG");
  }
}

module.exports = RadiantsJudgment;
