"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AgelessEntity extends UnimplementedCard {
  constructor (game) {
    super(game, "Ageless Entity", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = AgelessEntity;
