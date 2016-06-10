"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RadiantsJudgment extends UnimplementedCard {
  constructor (game) {
    super(game, "Radiant's Judgment", "Urza's Legacy", "ULG");
  }
}

module.exports = RadiantsJudgment;
