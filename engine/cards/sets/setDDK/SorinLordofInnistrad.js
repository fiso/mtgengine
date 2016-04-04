"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SorinLordofInnistradBase = require("../setDKA/SorinLordofInnistrad.js");

class SorinLordofInnistrad extends SorinLordofInnistradBase {
  constructor(game) {
    super(game, "Sorin, Lord of Innistrad", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = SorinLordofInnistrad;
