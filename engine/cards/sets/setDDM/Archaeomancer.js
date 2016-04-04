"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Archaeomancer extends Card {
  constructor(game) {
    super(game, "Archaeomancer", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = Archaeomancer;
