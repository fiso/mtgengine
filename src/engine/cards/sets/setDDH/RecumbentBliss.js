"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RecumbentBliss extends UnimplementedCard {
  constructor (game) {
    super(game, "Recumbent Bliss", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = RecumbentBliss;
