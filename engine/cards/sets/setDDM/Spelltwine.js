"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Spelltwine extends UnimplementedCard {
  constructor(game) {
    super(game, "Spelltwine", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = Spelltwine;
