"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WordofSeizingBase = require("../setC14/WordofSeizing.js");

class WordofSeizing extends WordofSeizingBase {
  constructor(game) {
    super(game, "Word of Seizing", "Time Spiral", "TSP");
  }
}

module.exports = WordofSeizing;
