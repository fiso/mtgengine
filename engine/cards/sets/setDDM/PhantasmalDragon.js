"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PhantasmalDragon extends Card {
  constructor(game) {
    super(game, "Phantasmal Dragon", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = PhantasmalDragon;
