"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PhantasmalBear extends Card {
  constructor(game) {
    super(game, "Phantasmal Bear", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = PhantasmalBear;
