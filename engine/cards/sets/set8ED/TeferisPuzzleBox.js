"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TeferisPuzzleBoxBase = require("../set6ED/TeferisPuzzleBox.js");

class TeferisPuzzleBox extends TeferisPuzzleBoxBase {
  constructor(game) {
    super(game, "Teferi's Puzzle Box", "Eighth Edition", "8ED");
  }
}

module.exports = TeferisPuzzleBox;
