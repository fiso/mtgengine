"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DominariasJudgment extends Card {
  constructor(game) {
    super(game, "Dominaria's Judgment", "Planeshift", "PLS");
  }
}

module.exports = DominariasJudgment;
