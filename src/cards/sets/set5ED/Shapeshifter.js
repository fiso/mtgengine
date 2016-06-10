"use strict";
const Constants = require ("../../../Constants");
const ShapeshifterBase = require("../setATQ/Shapeshifter");

class Shapeshifter extends ShapeshifterBase {
  constructor (game) {
    super(game, "Shapeshifter", "Fifth Edition", "5ED");
  }
}

module.exports = Shapeshifter;
