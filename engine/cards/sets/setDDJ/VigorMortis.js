"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VigorMortis extends Card {
  constructor(game) {
    super(game, "Vigor Mortis", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = VigorMortis;
