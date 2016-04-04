"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DayofJudgment extends UnimplementedCard {
  constructor(game) {
    super(game, "Day of Judgment", "Magic 2011", "M11");
  }
}

module.exports = DayofJudgment;
