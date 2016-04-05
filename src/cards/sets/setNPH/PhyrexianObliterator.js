"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhyrexianObliterator extends UnimplementedCard {
  constructor(game) {
    super(game, "Phyrexian Obliterator", "New Phyrexia", "NPH");
  }
}

module.exports = PhyrexianObliterator;
