"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Chronomaton extends Card {
  constructor(game) {
    super(game, "Chronomaton", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = Chronomaton;
