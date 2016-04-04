"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GhoulsFeast extends Card {
  constructor(game) {
    super(game, "Ghoul's Feast", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = GhoulsFeast;
