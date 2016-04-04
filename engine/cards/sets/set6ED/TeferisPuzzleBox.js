"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TeferisPuzzleBox extends Card {
  constructor(game) {
    super(game, "Teferi's Puzzle Box", "Classic Sixth Edition", "6ED");
  }
}

module.exports = TeferisPuzzleBox;
