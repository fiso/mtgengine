"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SearingMeditation extends UnimplementedCard {
  constructor(game) {
    super(game, "Searing Meditation", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = SearingMeditation;
