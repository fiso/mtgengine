"use strict";
const Constants = require ("../../../Constants");
const AstralSlideBase = require("../setVMA/AstralSlide");

class AstralSlide extends AstralSlideBase {
  constructor (game) {
    super(game, "Astral Slide", "Friday Night Magic 2006", "F06");
  }
}

module.exports = AstralSlide;
