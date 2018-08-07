"use strict";
const Constants = require ("../../../Constants");
const ShapeshifterBase = require("../setTC18/Shapeshifter");

class Shapeshifter extends ShapeshifterBase {
  constructor (game) {
    super(game, "Shapeshifter", "Commander Anthology Volume II Tokens", "TCM2");
  }
}

module.exports = Shapeshifter;
