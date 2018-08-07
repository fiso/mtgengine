"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MazesEnd extends UnimplementedCard {
  constructor (game) {
    super(game, "Maze's End", "Dragon's Maze", "DGM");
  }
}

module.exports = MazesEnd;
