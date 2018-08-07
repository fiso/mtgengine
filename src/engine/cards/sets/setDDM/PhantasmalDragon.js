"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhantasmalDragon extends UnimplementedCard {
  constructor (game) {
    super(game, "Phantasmal Dragon", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = PhantasmalDragon;
