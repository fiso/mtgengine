"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhantasmalBear extends UnimplementedCard {
  constructor (game) {
    super(game, "Phantasmal Bear", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = PhantasmalBear;
