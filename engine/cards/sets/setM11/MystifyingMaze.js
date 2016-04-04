"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MystifyingMaze extends Card {
  constructor(game) {
    super(game, "Mystifying Maze", "Magic 2011", "M11");
  }
}

module.exports = MystifyingMaze;
