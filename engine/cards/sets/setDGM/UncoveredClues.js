"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UncoveredClues extends UnimplementedCard {
  constructor(game) {
    super(game, "Uncovered Clues", "Dragon's Maze", "DGM");
  }
}

module.exports = UncoveredClues;
