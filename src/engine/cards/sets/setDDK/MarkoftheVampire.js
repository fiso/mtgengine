"use strict";
const Constants = require ("../../../Constants");
const MarkoftheVampireBase = require("../setXLN/MarkoftheVampire");

class MarkoftheVampire extends MarkoftheVampireBase {
  constructor (game) {
    super(game, "Mark of the Vampire", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = MarkoftheVampire;
