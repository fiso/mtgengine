"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DayofJudgment extends UnimplementedCard {
  constructor (game) {
    super(game, "Day of Judgment", "Explorers of Ixalan", "E02");
  }
}

module.exports = DayofJudgment;
