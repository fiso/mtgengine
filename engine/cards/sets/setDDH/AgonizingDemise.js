"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AgonizingDemise extends Card {
  constructor(game) {
    super(game, "Agonizing Demise", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = AgonizingDemise;
