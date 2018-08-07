"use strict";
const Constants = require ("../../../Constants");
const TalismanofDominanceBase = require("../setE01/TalismanofDominance");

class TalismanofDominance extends TalismanofDominanceBase {
  constructor (game) {
    super(game, "Talisman of Dominance", "World Championship Decks 2004", "WC04");
  }
}

module.exports = TalismanofDominance;
