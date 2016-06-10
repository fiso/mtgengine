"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhyrexianTotem extends UnimplementedCard {
  constructor (game) {
    super(game, "Phyrexian Totem", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = PhyrexianTotem;
