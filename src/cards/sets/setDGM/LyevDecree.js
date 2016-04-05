"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LyevDecree extends UnimplementedCard {
  constructor(game) {
    super(game, "Lyev Decree", "Dragon's Maze", "DGM");
  }
}

module.exports = LyevDecree;
