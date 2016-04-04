"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NicolBolasPlaneswalkerBase = require("../setCON/NicolBolasPlaneswalker.js");

class NicolBolasPlaneswalker extends NicolBolasPlaneswalkerBase {
  constructor(game) {
    super(game, "Nicol Bolas, Planeswalker", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = NicolBolasPlaneswalker;
