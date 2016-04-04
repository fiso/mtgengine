"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Dissipate extends Card {
  constructor(game) {
    super(game, "Dissipate", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = Dissipate;
