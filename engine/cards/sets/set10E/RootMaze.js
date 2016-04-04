"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RootMazeBase = require("../setTMP/RootMaze.js");

class RootMaze extends RootMazeBase {
  constructor(game) {
    super(game, "Root Maze", "Tenth Edition", "10E");
  }
}

module.exports = RootMaze;
