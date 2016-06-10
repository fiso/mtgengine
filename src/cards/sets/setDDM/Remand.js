"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Remand extends UnimplementedCard {
  constructor (game) {
    super(game, "Remand", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = Remand;
