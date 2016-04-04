"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SerratedArrowsBase = require("../setATH/SerratedArrows.js");

class SerratedArrows extends SerratedArrowsBase {
  constructor(game) {
    super(game, "Serrated Arrows", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = SerratedArrows;
