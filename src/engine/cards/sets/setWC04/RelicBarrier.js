"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RelicBarrier extends UnimplementedCard {
  constructor (game) {
    super(game, "Relic Barrier", "World Championship Decks 2004", "WC04");
  }
}

module.exports = RelicBarrier;
