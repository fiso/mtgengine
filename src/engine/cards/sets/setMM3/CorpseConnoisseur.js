"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CorpseConnoisseur extends UnimplementedCard {
  constructor (game) {
    super(game, "Corpse Connoisseur", "Modern Masters 2017", "MM3");
  }
}

module.exports = CorpseConnoisseur;
