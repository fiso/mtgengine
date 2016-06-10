"use strict";
const Constants = require ("../../../Constants");
const NicolBolasPlaneswalkerBase = require("../setCON/NicolBolasPlaneswalker");

class NicolBolasPlaneswalker extends NicolBolasPlaneswalkerBase {
  constructor (game) {
    super(game, "Nicol Bolas, Planeswalker", "Magic 2013", "M13");
  }
}

module.exports = NicolBolasPlaneswalker;
