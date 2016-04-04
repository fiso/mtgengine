"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WordofUndoingBase = require("../setICE/WordofUndoing.js");

class WordofUndoing extends WordofUndoingBase {
  constructor(game) {
    super(game, "Word of Undoing", "Masters Edition", "MED");
  }
}

module.exports = WordofUndoing;
