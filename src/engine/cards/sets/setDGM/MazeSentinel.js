"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MazeSentinel extends UnimplementedCard {
  constructor (game) {
    super(game, "Maze Sentinel", "Dragon's Maze", "DGM");
  }
}

module.exports = MazeSentinel;
