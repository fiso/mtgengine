"use strict";
const Constants = require ("../../../Constants");
const NicolBolasPlaneswalkerBase = require("../setCON/NicolBolasPlaneswalker");

class NicolBolasPlaneswalker extends NicolBolasPlaneswalkerBase {
  constructor (game) {
    super(game, "Nicol Bolas, Planeswalker", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = NicolBolasPlaneswalker;
