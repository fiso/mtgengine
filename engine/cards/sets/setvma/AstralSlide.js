"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AstralSlideBase = require("../setpFNM/AstralSlide.js");

class AstralSlide extends AstralSlideBase {
  constructor(game) {
    super(game, "Astral Slide", "Vintage Masters", "VMA");
  }
}

module.exports = AstralSlide;
