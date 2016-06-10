"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DiregrafGhoul extends UnimplementedCard {
  constructor (game) {
    super(game, "Diregraf Ghoul", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = DiregrafGhoul;
