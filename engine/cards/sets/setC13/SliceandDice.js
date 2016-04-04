"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SliceandDice extends Card {
  constructor(game) {
    super(game, "Slice and Dice", "Commander 2013 Edition", "C13");
  }
}

module.exports = SliceandDice;
