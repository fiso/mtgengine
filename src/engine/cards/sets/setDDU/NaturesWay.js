"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NaturesWay extends UnimplementedCard {
  constructor (game) {
    super(game, "Nature's Way", "Duel Decks: Elves vs. Inventors", "DDU");
  }
}

module.exports = NaturesWay;
