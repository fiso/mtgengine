"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CorpseConnoisseurBase = require("../setARC/CorpseConnoisseur.js");

class CorpseConnoisseur extends CorpseConnoisseurBase {
  constructor(game) {
    super(game, "Corpse Connoisseur", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = CorpseConnoisseur;
