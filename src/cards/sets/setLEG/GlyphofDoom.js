"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GlyphofDoom extends UnimplementedCard {
  constructor(game) {
    super(game, "Glyph of Doom", "Legends", "LEG");
  }
}

module.exports = GlyphofDoom;
