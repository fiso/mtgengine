"use strict";
const Constants = require ("../../../Constants");
const TeferisPuzzleBoxBase = require("../set9ED/TeferisPuzzleBox");

class TeferisPuzzleBox extends TeferisPuzzleBoxBase {
  constructor (game) {
    super(game, "Teferi's Puzzle Box", "Visions", "VIS");
  }
}

module.exports = TeferisPuzzleBox;
