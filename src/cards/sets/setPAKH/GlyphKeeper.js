"use strict";
const Constants = require ("../../../Constants");
const GlyphKeeperBase = require("../setAKH/GlyphKeeper");

class GlyphKeeper extends GlyphKeeperBase {
  constructor (game) {
    super(game, "Glyph Keeper", "Amonkhet Promos", "PAKH");
  }
}

module.exports = GlyphKeeper;
