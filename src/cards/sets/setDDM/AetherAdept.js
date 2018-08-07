"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AetherAdept extends UnimplementedCard {
  constructor (game) {
    super(game, "Aether Adept", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = AetherAdept;
