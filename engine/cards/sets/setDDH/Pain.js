"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Pain extends Card {
  constructor(game) {
    super(game, "Pain", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = Pain;
