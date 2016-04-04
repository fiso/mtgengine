"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ButchersCleaver extends Card {
  constructor(game) {
    super(game, "Butcher's Cleaver", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = ButchersCleaver;
