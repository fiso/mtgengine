"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Briarhorn extends UnimplementedCard {
  constructor (game) {
    super(game, "Briarhorn", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = Briarhorn;
