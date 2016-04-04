"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PiecesofthePuzzle extends UnimplementedCard {
  constructor(game) {
    super(game, "Pieces of the Puzzle", "Shadows over Innistrad", "SOI");
  }
}

module.exports = PiecesofthePuzzle;
