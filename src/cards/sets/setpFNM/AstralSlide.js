"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AstralSlide extends UnimplementedCard {
  constructor (game) {
    super(game, "Astral Slide", "Friday Night Magic", "pFNM");
  }
}

module.exports = AstralSlide;
