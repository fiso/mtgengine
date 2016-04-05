"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VoltaicKey extends UnimplementedCard {
  constructor(game) {
    super(game, "Voltaic Key", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = VoltaicKey;
