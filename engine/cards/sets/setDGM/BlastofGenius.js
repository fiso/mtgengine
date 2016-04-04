"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlastofGenius extends Card {
  constructor(game) {
    super(game, "Blast of Genius", "Dragon's Maze", "DGM");
  }
}

module.exports = BlastofGenius;
