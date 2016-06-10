"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GlyphofLife extends UnimplementedCard {
  constructor (game) {
    super(game, "Glyph of Life", "Legends", "LEG");
  }
}

module.exports = GlyphofLife;
