"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MazesEnd extends Card {
  constructor(game) {
    super(game, "Maze's End", "Dragon's Maze", "DGM");
  }
}

module.exports = MazesEnd;
