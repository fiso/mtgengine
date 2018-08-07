"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AbattoirGhoul extends UnimplementedCard {
  constructor (game) {
    super(game, "Abattoir Ghoul", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = AbattoirGhoul;
