"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KothoftheHammerEmblem extends UnimplementedCard {
  constructor (game) {
    super(game, "Koth of the Hammer Emblem", "Duel Decks: Venser vs. Koth Tokens", "TDDI");
  }
}

module.exports = KothoftheHammerEmblem;
