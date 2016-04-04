"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DarkMaze extends Card {
  constructor(game) {
    super(game, "Dark Maze", "Fifth Edition", "5ED");
  }
}

module.exports = DarkMaze;
