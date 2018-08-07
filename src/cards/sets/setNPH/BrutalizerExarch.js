"use strict";
const Constants = require ("../../../Constants");
const BrutalizerExarchBase = require("../setPCA/BrutalizerExarch");

class BrutalizerExarch extends BrutalizerExarchBase {
  constructor (game) {
    super(game, "Brutalizer Exarch", "New Phyrexia", "NPH");
  }
}

module.exports = BrutalizerExarch;
