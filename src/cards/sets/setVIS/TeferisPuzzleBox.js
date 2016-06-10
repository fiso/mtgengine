"use strict";
const Constants = require ("../../../Constants");
const TeferisPuzzleBoxBase = require("../set6ED/TeferisPuzzleBox");

class TeferisPuzzleBox extends TeferisPuzzleBoxBase {
  constructor (game) {
    super(game, "Teferi's Puzzle Box", "Visions", "VIS");
  }
}

module.exports = TeferisPuzzleBox;
