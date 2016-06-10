"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AetherFigment extends UnimplementedCard {
  constructor (game) {
    super(game, "Æther Figment", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = AetherFigment;
