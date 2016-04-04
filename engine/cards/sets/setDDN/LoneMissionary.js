"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LoneMissionary extends Card {
  constructor(game) {
    super(game, "Lone Missionary", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = LoneMissionary;
