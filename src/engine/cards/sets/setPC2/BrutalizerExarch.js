"use strict";
const Constants = require ("../../../Constants");
const BrutalizerExarchBase = require("../setPCA/BrutalizerExarch");

class BrutalizerExarch extends BrutalizerExarchBase {
  constructor (game) {
    super(game, "Brutalizer Exarch", "Planechase 2012", "PC2");
  }
}

module.exports = BrutalizerExarch;
