"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SuddenSpoiling extends UnimplementedCard {
  constructor (game) {
    super(game, "Sudden Spoiling", "Commander 2013 Edition", "C13");
  }
}

module.exports = SuddenSpoiling;
