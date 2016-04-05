"use strict";
const Constants = require ("../../../Constants");
const KnightoftheReliquaryBase = require("../setCON/KnightoftheReliquary");

class KnightoftheReliquary extends KnightoftheReliquaryBase {
  constructor(game) {
    super(game, "Knight of the Reliquary", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = KnightoftheReliquary;
