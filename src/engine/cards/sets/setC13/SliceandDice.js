"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SliceandDice extends UnimplementedCard {
  constructor (game) {
    super(game, "Slice and Dice", "Commander 2013", "C13");
  }
}

module.exports = SliceandDice;
