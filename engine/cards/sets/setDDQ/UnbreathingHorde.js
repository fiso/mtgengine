"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UnbreathingHorde extends Card {
  constructor(game) {
    super(game, "Unbreathing Horde", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = UnbreathingHorde;
