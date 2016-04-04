"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AstralSlide extends Card {
  constructor(game) {
    super(game, "Astral Slide", "Friday Night Magic", "pFNM");
  }
}

module.exports = AstralSlide;
