"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MazeBehemoth extends Card {
  constructor(game) {
    super(game, "Maze Behemoth", "Dragon's Maze", "DGM");
  }
}

module.exports = MazeBehemoth;
