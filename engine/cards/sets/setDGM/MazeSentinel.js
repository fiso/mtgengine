"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MazeSentinel extends Card {
  constructor(game) {
    super(game, "Maze Sentinel", "Dragon's Maze", "DGM");
  }
}

module.exports = MazeSentinel;
