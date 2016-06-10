"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SanguineGuard extends UnimplementedCard {
  constructor (game) {
    super(game, "Sanguine Guard", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = SanguineGuard;
