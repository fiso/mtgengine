"use strict";
const Constants = require ("../../../Constants");
const SerratedArrowsBase = require("../setGVL/SerratedArrows");

class SerratedArrows extends SerratedArrowsBase {
  constructor (game) {
    super(game, "Serrated Arrows", "Magic Online Promos", "PRM");
  }
}

module.exports = SerratedArrows;
