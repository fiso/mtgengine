"use strict";
const Constants = require ("../../../Constants");
const SliceandDiceBase = require("../setC13/SliceandDice");

class SliceandDice extends SliceandDiceBase {
  constructor(game) {
    super(game, "Slice and Dice", "Friday Night Magic", "pFNM");
  }
}

module.exports = SliceandDice;
