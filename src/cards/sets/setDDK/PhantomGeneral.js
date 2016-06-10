"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhantomGeneral extends UnimplementedCard {
  constructor (game) {
    super(game, "Phantom General", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = PhantomGeneral;
