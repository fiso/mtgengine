"use strict";
const Constants = require ("../../../Constants");
const ScrybSpritesBase = require("../setME3/ScrybSprites");

class ScrybSprites extends ScrybSpritesBase {
  constructor (game) {
    super(game, "Scryb Sprites", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = ScrybSprites;
