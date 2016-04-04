"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GleamofBattle extends Card {
  constructor(game) {
    super(game, "Gleam of Battle", "Dragon's Maze", "DGM");
  }
}

module.exports = GleamofBattle;
