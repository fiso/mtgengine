"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Recoil extends UnimplementedCard {
  constructor(game) {
    super(game, "Recoil", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = Recoil;
