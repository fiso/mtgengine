"use strict";
const Constants = require ("../../../Constants");
const DayofJudgmentBase = require("../setE02/DayofJudgment");

class DayofJudgment extends DayofJudgmentBase {
  constructor (game) {
    super(game, "Day of Judgment", "Magic 2011", "M11");
  }
}

module.exports = DayofJudgment;
