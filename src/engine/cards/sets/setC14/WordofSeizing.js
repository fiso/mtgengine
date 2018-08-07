"use strict";
const Constants = require ("../../../Constants");
const WordofSeizingBase = require("../setCM2/WordofSeizing");

class WordofSeizing extends WordofSeizingBase {
  constructor (game) {
    super(game, "Word of Seizing", "Commander 2014", "C14");
  }
}

module.exports = WordofSeizing;
