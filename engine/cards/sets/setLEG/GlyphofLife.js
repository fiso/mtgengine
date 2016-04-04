"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GlyphofLife extends Card {
  constructor(game) {
    super(game, "Glyph of Life", "Legends", "LEG");
  }
}

module.exports = GlyphofLife;
