"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GatekeeperofMalakir extends Card {
  constructor(game) {
    super(game, "Gatekeeper of Malakir", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = GatekeeperofMalakir;
