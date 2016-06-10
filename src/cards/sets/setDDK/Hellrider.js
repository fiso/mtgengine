"use strict";
const Constants = require ("../../../Constants");
const HellriderBase = require("../setDKA/Hellrider");

class Hellrider extends HellriderBase {
  constructor (game) {
    super(game, "Hellrider", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = Hellrider;
