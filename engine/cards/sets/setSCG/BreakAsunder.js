"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BreakAsunder extends UnimplementedCard {
  constructor(game) {
    super(game, "Break Asunder", "Scourge", "SCG");
  }
}

module.exports = BreakAsunder;
