"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MazeBehemoth extends UnimplementedCard {
  constructor (game) {
    super(game, "Maze Behemoth", "Dragon's Maze", "DGM");
  }
}

module.exports = MazeBehemoth;
