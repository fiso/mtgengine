"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HellfireMongrel extends UnimplementedCard {
  constructor(game) {
    super(game, "Hellfire Mongrel", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = HellfireMongrel;
