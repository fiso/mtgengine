"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AgonizingDemise extends UnimplementedCard {
  constructor(game) {
    super(game, "Agonizing Demise", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = AgonizingDemise;
