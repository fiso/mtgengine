"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Misdirection extends UnimplementedCard {
  constructor (game) {
    super(game, "Misdirection", "Duel Decks: Merfolk vs. Goblins", "DDT");
  }
}

module.exports = Misdirection;
