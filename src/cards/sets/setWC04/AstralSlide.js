"use strict";
const Constants = require ("../../../Constants");
const AstralSlideBase = require("../setVMA/AstralSlide");

class AstralSlide extends AstralSlideBase {
  constructor (game) {
    super(game, "Astral Slide", "World Championship Decks 2004", "WC04");
  }
}

module.exports = AstralSlide;
