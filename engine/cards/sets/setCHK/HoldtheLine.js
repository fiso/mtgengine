"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HoldtheLine extends Card {
  constructor(game) {
    super(game, "Hold the Line", "Champions of Kamigawa", "CHK");
  }
}

module.exports = HoldtheLine;
