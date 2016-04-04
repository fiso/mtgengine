"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Spelltwine extends Card {
  constructor(game) {
    super(game, "Spelltwine", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = Spelltwine;
