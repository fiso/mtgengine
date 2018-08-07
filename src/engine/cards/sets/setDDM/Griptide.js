"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Griptide extends UnimplementedCard {
  constructor (game) {
    super(game, "Griptide", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = Griptide;
