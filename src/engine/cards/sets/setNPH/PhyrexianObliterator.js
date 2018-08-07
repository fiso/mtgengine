"use strict";
const Constants = require ("../../../Constants");
const PhyrexianObliteratorBase = require("../setA25/PhyrexianObliterator");

class PhyrexianObliterator extends PhyrexianObliteratorBase {
  constructor (game) {
    super(game, "Phyrexian Obliterator", "New Phyrexia", "NPH");
  }
}

module.exports = PhyrexianObliterator;
