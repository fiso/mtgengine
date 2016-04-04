"use strict";
const Constants = require ("../../../Constants");
const UnmakeBase = require("../setARC/Unmake");

class Unmake extends UnmakeBase {
  constructor(game) {
    super(game, "Unmake", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = Unmake;
