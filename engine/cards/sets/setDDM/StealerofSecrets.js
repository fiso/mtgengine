"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StealerofSecrets extends Card {
  constructor(game) {
    super(game, "Stealer of Secrets", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = StealerofSecrets;
