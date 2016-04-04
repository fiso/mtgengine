"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LeylinePhantom extends Card {
  constructor(game) {
    super(game, "Leyline Phantom", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = LeylinePhantom;
