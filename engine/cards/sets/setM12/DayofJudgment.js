"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DayofJudgmentBase = require("../setM11/DayofJudgment.js");

class DayofJudgment extends DayofJudgmentBase {
  constructor(game) {
    super(game, "Day of Judgment", "Magic 2012", "M12");
  }
}

module.exports = DayofJudgment;
