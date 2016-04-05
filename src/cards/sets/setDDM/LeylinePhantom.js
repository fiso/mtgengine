"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LeylinePhantom extends UnimplementedCard {
  constructor(game) {
    super(game, "Leyline Phantom", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = LeylinePhantom;
