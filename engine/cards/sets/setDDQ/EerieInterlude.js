"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EerieInterlude extends Card {
  constructor(game) {
    super(game, "Eerie Interlude", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = EerieInterlude;
