"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DayofJudgment extends Card {
  constructor(game) {
    super(game, "Day of Judgment", "Magic 2011", "M11");
  }
}

module.exports = DayofJudgment;
