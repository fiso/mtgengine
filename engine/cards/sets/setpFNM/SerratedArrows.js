"use strict";
const Constants = require ("../../../Constants");
const SerratedArrowsBase = require("../setATH/SerratedArrows");

class SerratedArrows extends SerratedArrowsBase {
  constructor(game) {
    super(game, "Serrated Arrows", "Friday Night Magic", "pFNM");
  }
}

module.exports = SerratedArrows;
