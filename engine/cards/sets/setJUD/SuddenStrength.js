"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SuddenStrength extends Card {
  constructor(game) {
    super(game, "Sudden Strength", "Judgment", "JUD");
  }
}

module.exports = SuddenStrength;
