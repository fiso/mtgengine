"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TrostanisJudgment extends UnimplementedCard {
  constructor(game) {
    super(game, "Trostani's Judgment", "Return to Ravnica", "RTR");
  }
}

module.exports = TrostanisJudgment;
