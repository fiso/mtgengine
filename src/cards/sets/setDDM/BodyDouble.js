"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BodyDouble extends UnimplementedCard {
  constructor(game) {
    super(game, "Body Double", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = BodyDouble;
