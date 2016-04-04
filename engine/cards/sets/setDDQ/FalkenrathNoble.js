"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FalkenrathNoble extends Card {
  constructor(game) {
    super(game, "Falkenrath Noble", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = FalkenrathNoble;
