"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhyrexianDenouncer extends UnimplementedCard {
  constructor(game) {
    super(game, "Phyrexian Denouncer", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = PhyrexianDenouncer;
