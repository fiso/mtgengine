"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Hornet extends UnimplementedCard {
  constructor (game) {
    super(game, "Hornet", "Duel Decks: Phyrexia vs. the Coalition Tokens", "TDDE");
  }
}

module.exports = Hornet;
