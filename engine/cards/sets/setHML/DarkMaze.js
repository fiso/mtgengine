"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DarkMazeBase = require("../set5ED/DarkMaze.js");

class DarkMaze extends DarkMazeBase {
  constructor(game) {
    super(game, "Dark Maze", "Homelands", "HML");
  }
}

module.exports = DarkMaze;
