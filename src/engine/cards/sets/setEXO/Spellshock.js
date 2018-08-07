"use strict";
const Constants = require ("../../../Constants");
const SpellshockBase = require("../setTPR/Spellshock");

class Spellshock extends SpellshockBase {
  constructor (game) {
    super(game, "Spellshock", "Exodus", "EXO");
  }
}

module.exports = Spellshock;
