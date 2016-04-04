"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LyevDecree extends Card {
  constructor(game) {
    super(game, "Lyev Decree", "Dragon's Maze", "DGM");
  }
}

module.exports = LyevDecree;
