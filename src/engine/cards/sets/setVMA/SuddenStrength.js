"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SuddenStrength extends UnimplementedCard {
  constructor (game) {
    super(game, "Sudden Strength", "Vintage Masters", "VMA");
  }
}

module.exports = SuddenStrength;
