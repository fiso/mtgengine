"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PiecesofthePuzzle extends Card {
  constructor(game) {
    super(game, "Pieces of the Puzzle", "Shadows over Innistrad", "SOI");
  }
}

module.exports = PiecesofthePuzzle;
