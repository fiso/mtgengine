"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UncoveredClues extends Card {
  constructor(game) {
    super(game, "Uncovered Clues", "Dragon's Maze", "DGM");
  }
}

module.exports = UncoveredClues;
