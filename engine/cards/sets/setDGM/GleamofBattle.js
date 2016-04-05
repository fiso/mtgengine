"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GleamofBattle extends UnimplementedCard {
  constructor(game) {
    super(game, "Gleam of Battle", "Dragon's Maze", "DGM");
  }
}

module.exports = GleamofBattle;
