"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HiddenStrings extends UnimplementedCard {
  constructor (game) {
    super(game, "Hidden Strings", "Dragon's Maze", "DGM");
  }
}

module.exports = HiddenStrings;
