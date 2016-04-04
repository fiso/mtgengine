"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GlyphofDoom extends Card {
  constructor(game) {
    super(game, "Glyph of Doom", "Legends", "LEG");
  }
}

module.exports = GlyphofDoom;
