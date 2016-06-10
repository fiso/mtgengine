"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RecklessAbandon extends UnimplementedCard {
  constructor (game) {
    super(game, "Reckless Abandon", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = RecklessAbandon;
