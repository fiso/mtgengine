"use strict";
const Constants = require ("../../../Constants");
const WordofUndoingBase = require("../setICE/WordofUndoing");

class WordofUndoing extends WordofUndoingBase {
  constructor (game) {
    super(game, "Word of Undoing", "Masters Edition", "MED");
  }
}

module.exports = WordofUndoing;
