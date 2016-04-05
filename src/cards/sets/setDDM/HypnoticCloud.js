"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HypnoticCloud extends UnimplementedCard {
  constructor(game) {
    super(game, "Hypnotic Cloud", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = HypnoticCloud;
