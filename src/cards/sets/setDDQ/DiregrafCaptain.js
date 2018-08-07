"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DiregrafCaptain extends UnimplementedCard {
  constructor (game) {
    super(game, "Diregraf Captain", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = DiregrafCaptain;
