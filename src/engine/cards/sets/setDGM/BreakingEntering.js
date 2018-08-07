"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BreakingEntering extends UnimplementedCard {
  constructor (game) {
    super(game, "Breaking // Entering", "Dragon's Maze", "DGM");
  }
}

module.exports = BreakingEntering;
