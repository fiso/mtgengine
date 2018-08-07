"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElderMastery extends UnimplementedCard {
  constructor (game) {
    super(game, "Elder Mastery", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = ElderMastery;
