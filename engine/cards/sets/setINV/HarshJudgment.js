"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HarshJudgment extends Card {
  constructor(game) {
    super(game, "Harsh Judgment", "Invasion", "INV");
  }
}

module.exports = HarshJudgment;
