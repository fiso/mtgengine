"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Chronomaton extends UnimplementedCard {
  constructor(game) {
    super(game, "Chronomaton", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = Chronomaton;
