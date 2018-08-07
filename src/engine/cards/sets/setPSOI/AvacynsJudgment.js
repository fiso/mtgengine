"use strict";
const Constants = require ("../../../Constants");
const AvacynsJudgmentBase = require("../setSOI/AvacynsJudgment");

class AvacynsJudgment extends AvacynsJudgmentBase {
  constructor (game) {
    super(game, "Avacyn's Judgment", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = AvacynsJudgment;
