"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChapelGeist extends Card {
  constructor(game) {
    super(game, "Chapel Geist", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = ChapelGeist;
