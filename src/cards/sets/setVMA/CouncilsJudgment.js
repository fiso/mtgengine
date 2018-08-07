"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CouncilsJudgment extends UnimplementedCard {
  constructor (game) {
    super(game, "Council's Judgment", "Vintage Masters", "VMA");
  }
}

module.exports = CouncilsJudgment;
