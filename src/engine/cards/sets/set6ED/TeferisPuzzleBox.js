"use strict";
const Constants = require ("../../../Constants");
const TeferisPuzzleBoxBase = require("../set9ED/TeferisPuzzleBox");

class TeferisPuzzleBox extends TeferisPuzzleBoxBase {
  constructor (game) {
    super(game, "Teferi's Puzzle Box", "Classic Sixth Edition", "6ED");
  }
}

module.exports = TeferisPuzzleBox;
