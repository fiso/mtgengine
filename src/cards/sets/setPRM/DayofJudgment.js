"use strict";
const Constants = require ("../../../Constants");
const DayofJudgmentBase = require("../setE02/DayofJudgment");

class DayofJudgment extends DayofJudgmentBase {
  constructor (game) {
    super(game, "Day of Judgment", "Magic Online Promos", "PRM");
  }
}

module.exports = DayofJudgment;
