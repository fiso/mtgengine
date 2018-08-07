"use strict";
const Constants = require ("../../../Constants");
const MesmericFiendBase = require("../setA25/MesmericFiend");

class MesmericFiend extends MesmericFiendBase {
  constructor (game) {
    super(game, "Mesmeric Fiend", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = MesmericFiend;
