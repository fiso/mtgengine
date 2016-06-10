"use strict";
const Constants = require ("../../../Constants");
const BrutalizerExarchBase = require("../setNPH/BrutalizerExarch");

class BrutalizerExarch extends BrutalizerExarchBase {
  constructor (game) {
    super(game, "Brutalizer Exarch", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = BrutalizerExarch;
