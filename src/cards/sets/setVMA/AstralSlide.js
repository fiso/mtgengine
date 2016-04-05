"use strict";
const Constants = require ("../../../Constants");
const AstralSlideBase = require("../setpFNM/AstralSlide");

class AstralSlide extends AstralSlideBase {
  constructor(game) {
    super(game, "Astral Slide", "Vintage Masters", "VMA");
  }
}

module.exports = AstralSlide;
