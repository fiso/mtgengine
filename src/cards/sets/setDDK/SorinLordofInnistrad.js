"use strict";
const Constants = require ("../../../Constants");
const SorinLordofInnistradBase = require("../setDKA/SorinLordofInnistrad");

class SorinLordofInnistrad extends SorinLordofInnistradBase {
  constructor (game) {
    super(game, "Sorin, Lord of Innistrad", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = SorinLordofInnistrad;
