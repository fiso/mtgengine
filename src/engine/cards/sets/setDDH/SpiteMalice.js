"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpiteMalice extends UnimplementedCard {
  constructor (game) {
    super(game, "Spite // Malice", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = SpiteMalice;
