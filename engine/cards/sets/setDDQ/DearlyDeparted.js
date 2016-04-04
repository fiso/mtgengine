"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DearlyDeparted extends Card {
  constructor(game) {
    super(game, "Dearly Departed", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = DearlyDeparted;
