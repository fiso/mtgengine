"use strict";
const Constants = require ("../../../Constants");
const ScrybSpritesBase = require("../setBRB/ScrybSprites");

class ScrybSprites extends ScrybSpritesBase {
  constructor (game) {
    super(game, "Scryb Sprites", "Fifth Edition", "5ED");
  }
}

module.exports = ScrybSprites;
