"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CorpseConnoisseur extends UnimplementedCard {
  constructor (game) {
    super(game, "Corpse Connoisseur", "Archenemy", "ARC");
  }
}

module.exports = CorpseConnoisseur;
