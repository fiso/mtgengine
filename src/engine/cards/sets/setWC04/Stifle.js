"use strict";
const Constants = require ("../../../Constants");
const StifleBase = require("../setMP2/Stifle");

class Stifle extends StifleBase {
  constructor (game) {
    super(game, "Stifle", "World Championship Decks 2004", "WC04");
  }
}

module.exports = Stifle;
