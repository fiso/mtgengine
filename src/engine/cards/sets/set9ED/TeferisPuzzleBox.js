"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TeferisPuzzleBox extends UnimplementedCard {
  constructor (game) {
    super(game, "Teferi's Puzzle Box", "Ninth Edition", "9ED");
  }
}

module.exports = TeferisPuzzleBox;
