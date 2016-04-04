"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Thunderheads extends Card {
  constructor(game) {
    super(game, "Thunderheads", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = Thunderheads;
