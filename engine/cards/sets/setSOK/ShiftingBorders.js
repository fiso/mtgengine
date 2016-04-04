"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShiftingBorders extends Card {
  constructor(game) {
    super(game, "Shifting Borders", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = ShiftingBorders;
