"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IzzetChronarch extends Card {
  constructor(game) {
    super(game, "Izzet Chronarch", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = IzzetChronarch;
