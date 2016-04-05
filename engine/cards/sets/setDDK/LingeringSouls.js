"use strict";
const Constants = require ("../../../Constants");
const LingeringSoulsBase = require("../setDKA/LingeringSouls");

class LingeringSouls extends LingeringSoulsBase {
  constructor(game) {
    super(game, "Lingering Souls", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = LingeringSouls;
