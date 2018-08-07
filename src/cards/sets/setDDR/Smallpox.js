"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Smallpox extends UnimplementedCard {
  constructor (game) {
    super(game, "Smallpox", "Duel Decks: Nissa vs. Ob Nixilis", "DDR");
  }
}

module.exports = Smallpox;
