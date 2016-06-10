"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlastofGenius extends UnimplementedCard {
  constructor (game) {
    super(game, "Blast of Genius", "Dragon's Maze", "DGM");
  }
}

module.exports = BlastofGenius;
