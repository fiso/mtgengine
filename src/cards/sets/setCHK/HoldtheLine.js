"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HoldtheLine extends UnimplementedCard {
  constructor (game) {
    super(game, "Hold the Line", "Champions of Kamigawa", "CHK");
  }
}

module.exports = HoldtheLine;
