"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TeferisPuzzleBox extends UnimplementedCard {
  constructor (game) {
    super(game, "Teferi's Puzzle Box", "Classic Sixth Edition", "6ED");
  }
}

module.exports = TeferisPuzzleBox;
