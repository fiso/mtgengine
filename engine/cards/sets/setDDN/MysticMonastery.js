"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MysticMonastery extends Card {
  constructor(game) {
    super(game, "Mystic Monastery", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = MysticMonastery;
