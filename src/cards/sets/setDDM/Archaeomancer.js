"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Archaeomancer extends UnimplementedCard {
  constructor (game) {
    super(game, "Archaeomancer", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = Archaeomancer;
