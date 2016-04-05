"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FinalJudgment extends UnimplementedCard {
  constructor(game) {
    super(game, "Final Judgment", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = FinalJudgment;
