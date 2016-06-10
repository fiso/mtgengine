"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StealerofSecrets extends UnimplementedCard {
  constructor (game) {
    super(game, "Stealer of Secrets", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = StealerofSecrets;
