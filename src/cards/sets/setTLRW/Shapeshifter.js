"use strict";
const Constants = require ("../../../Constants");
const ShapeshifterBase = require("../setTC18/Shapeshifter");

class Shapeshifter extends ShapeshifterBase {
  constructor (game) {
    super(game, "Shapeshifter", "Lorwyn Tokens", "TLRW");
  }
}

module.exports = Shapeshifter;
