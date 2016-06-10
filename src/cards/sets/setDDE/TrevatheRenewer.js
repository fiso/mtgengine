"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TrevatheRenewer extends UnimplementedCard {
  constructor (game) {
    super(game, "Treva, the Renewer", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = TrevatheRenewer;
