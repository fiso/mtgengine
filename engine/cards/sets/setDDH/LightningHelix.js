"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LightningHelix extends UnimplementedCard {
  constructor(game) {
    super(game, "Lightning Helix", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = LightningHelix;
