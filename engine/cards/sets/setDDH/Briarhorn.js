"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Briarhorn extends Card {
  constructor(game) {
    super(game, "Briarhorn", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = Briarhorn;
