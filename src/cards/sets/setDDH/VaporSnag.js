"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VaporSnag extends UnimplementedCard {
  constructor (game) {
    super(game, "Vapor Snag", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = VaporSnag;
