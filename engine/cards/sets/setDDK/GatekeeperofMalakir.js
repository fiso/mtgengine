"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GatekeeperofMalakir extends UnimplementedCard {
  constructor(game) {
    super(game, "Gatekeeper of Malakir", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = GatekeeperofMalakir;
