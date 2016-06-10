"use strict";
const Constants = require ("../../../Constants");
const ShapeshifterBase = require("../setATQ/Shapeshifter");

class Shapeshifter extends ShapeshifterBase {
  constructor (game) {
    super(game, "Shapeshifter", "Fourth Edition", "4ED");
  }
}

module.exports = Shapeshifter;
