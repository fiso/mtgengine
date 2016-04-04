"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SliceandDiceBase = require("../setC13/SliceandDice.js");

class SliceandDice extends SliceandDiceBase {
  constructor(game) {
    super(game, "Slice and Dice", "Friday Night Magic", "pFNM");
  }
}

module.exports = SliceandDice;
