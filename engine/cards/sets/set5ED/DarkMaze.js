"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarkMaze extends UnimplementedCard {
  constructor(game) {
    super(game, "Dark Maze", "Fifth Edition", "5ED");
  }
}

module.exports = DarkMaze;
