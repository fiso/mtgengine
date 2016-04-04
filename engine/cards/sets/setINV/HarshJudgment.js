"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HarshJudgment extends UnimplementedCard {
  constructor(game) {
    super(game, "Harsh Judgment", "Invasion", "INV");
  }
}

module.exports = HarshJudgment;
