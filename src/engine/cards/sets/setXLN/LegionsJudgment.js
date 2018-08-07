"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LegionsJudgment extends UnimplementedCard {
  constructor (game) {
    super(game, "Legion's Judgment", "Ixalan", "XLN");
  }
}

module.exports = LegionsJudgment;
