"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WordofSeizingBase = require("../setC14/WordofSeizing.js");

class WordofSeizing extends WordofSeizingBase {
  constructor(game) {
    super(game, "Word of Seizing", "Commander 2015", "C15");
  }
}

module.exports = WordofSeizing;
