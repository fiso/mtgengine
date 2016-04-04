"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BreakAsunder extends Card {
  constructor(game) {
    super(game, "Break Asunder", "Scourge", "SCG");
  }
}

module.exports = BreakAsunder;
