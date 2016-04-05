"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DominariasJudgment extends UnimplementedCard {
  constructor(game) {
    super(game, "Dominaria's Judgment", "Planeshift", "PLS");
  }
}

module.exports = DominariasJudgment;
