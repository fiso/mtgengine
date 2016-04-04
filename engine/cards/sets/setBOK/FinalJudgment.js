"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FinalJudgment extends Card {
  constructor(game) {
    super(game, "Final Judgment", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = FinalJudgment;
