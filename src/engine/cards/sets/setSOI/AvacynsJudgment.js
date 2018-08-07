"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AvacynsJudgment extends UnimplementedCard {
  constructor (game) {
    super(game, "Avacyn's Judgment", "Shadows over Innistrad", "SOI");
  }
}

module.exports = AvacynsJudgment;
