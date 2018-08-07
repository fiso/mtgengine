"use strict";
const Constants = require ("../../../Constants");
const WordofUndoingBase = require("../setMED/WordofUndoing");

class WordofUndoing extends WordofUndoingBase {
  constructor (game) {
    super(game, "Word of Undoing", "Ice Age", "ICE");
  }
}

module.exports = WordofUndoing;
