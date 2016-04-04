"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Reminisce extends Card {
  constructor(game) {
    super(game, "Reminisce", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = Reminisce;
