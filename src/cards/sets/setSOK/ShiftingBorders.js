"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShiftingBorders extends UnimplementedCard {
  constructor(game) {
    super(game, "Shifting Borders", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = ShiftingBorders;
