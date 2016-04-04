"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RadiantsJudgment extends Card {
  constructor(game) {
    super(game, "Radiant's Judgment", "Urza's Legacy", "ULG");
  }
}

module.exports = RadiantsJudgment;
