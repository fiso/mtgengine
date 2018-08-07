"use strict";
const Constants = require ("../../../Constants");
const SpellshockBase = require("../setTPR/Spellshock");

class Spellshock extends SpellshockBase {
  constructor (game) {
    super(game, "Spellshock", "World Championship Decks 1999", "WC99");
  }
}

module.exports = Spellshock;
