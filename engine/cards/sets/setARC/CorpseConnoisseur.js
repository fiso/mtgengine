"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CorpseConnoisseur extends Card {
  constructor(game) {
    super(game, "Corpse Connoisseur", "Archenemy", "ARC");
  }
}

module.exports = CorpseConnoisseur;
