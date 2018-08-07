"use strict";
const Constants = require ("../../../Constants");
const ShapeshifterBase = require("../setTC18/Shapeshifter");

class Shapeshifter extends ShapeshifterBase {
  constructor (game) {
    super(game, "Shapeshifter", "Commander 2015 Tokens", "TC15");
  }
}

module.exports = Shapeshifter;
