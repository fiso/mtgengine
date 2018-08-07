"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AstralSlide extends UnimplementedCard {
  constructor (game) {
    super(game, "Astral Slide", "Vintage Masters", "VMA");
  }
}

module.exports = AstralSlide;
