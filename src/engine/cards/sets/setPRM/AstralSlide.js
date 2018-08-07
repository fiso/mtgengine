"use strict";
const Constants = require ("../../../Constants");
const AstralSlideBase = require("../setVMA/AstralSlide");

class AstralSlide extends AstralSlideBase {
  constructor (game) {
    super(game, "Astral Slide", "Magic Online Promos", "PRM");
  }
}

module.exports = AstralSlide;
