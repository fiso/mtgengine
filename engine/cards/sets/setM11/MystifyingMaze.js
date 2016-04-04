"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MystifyingMaze extends UnimplementedCard {
  constructor(game) {
    super(game, "Mystifying Maze", "Magic 2011", "M11");
  }
}

module.exports = MystifyingMaze;
