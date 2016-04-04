"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FutureSight extends Card {
  constructor(game) {
    super(game, "Future Sight", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = FutureSight;
