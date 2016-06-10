"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ButchersCleaver extends UnimplementedCard {
  constructor (game) {
    super(game, "Butcher's Cleaver", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = ButchersCleaver;
