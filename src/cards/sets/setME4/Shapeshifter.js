"use strict";
const Constants = require ("../../../Constants");
const ShapeshifterBase = require("../setTC18/Shapeshifter");

class Shapeshifter extends ShapeshifterBase {
  constructor (game) {
    super(game, "Shapeshifter", "Masters Edition IV", "ME4");
  }
}

module.exports = Shapeshifter;
