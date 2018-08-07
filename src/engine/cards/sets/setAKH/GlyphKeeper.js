"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GlyphKeeper extends UnimplementedCard {
  constructor (game) {
    super(game, "Glyph Keeper", "Amonkhet", "AKH");
  }
}

module.exports = GlyphKeeper;
