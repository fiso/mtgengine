"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Minion extends UnimplementedCard {
  constructor (game) {
    super(game, "Minion", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = Minion;
