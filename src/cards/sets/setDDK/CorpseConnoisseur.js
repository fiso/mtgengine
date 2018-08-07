"use strict";
const Constants = require ("../../../Constants");
const CorpseConnoisseurBase = require("../setMM3/CorpseConnoisseur");

class CorpseConnoisseur extends CorpseConnoisseurBase {
  constructor (game) {
    super(game, "Corpse Connoisseur", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = CorpseConnoisseur;
