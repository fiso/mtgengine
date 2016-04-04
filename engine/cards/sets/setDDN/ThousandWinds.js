"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThousandWinds extends Card {
  constructor(game) {
    super(game, "Thousand Winds", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = ThousandWinds;
