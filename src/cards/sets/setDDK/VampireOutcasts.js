"use strict";
const Constants = require ("../../../Constants");
const VampireOutcastsBase = require("../setMM2/VampireOutcasts");

class VampireOutcasts extends VampireOutcastsBase {
  constructor (game) {
    super(game, "Vampire Outcasts", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = VampireOutcasts;
