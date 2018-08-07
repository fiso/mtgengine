"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeraphSanctuary extends UnimplementedCard {
  constructor (game) {
    super(game, "Seraph Sanctuary", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = SeraphSanctuary;
