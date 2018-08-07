"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GlyphKeeperToken extends UnimplementedCard {
  constructor (game) {
    super(game, "Glyph Keeper Token", "Amonkhet Tokens", "TAKH");
  }
}

module.exports = GlyphKeeperToken;
