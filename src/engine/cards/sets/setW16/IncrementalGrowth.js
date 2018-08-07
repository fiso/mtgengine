"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IncrementalGrowth extends UnimplementedCard {
  constructor (game) {
    super(game, "Incremental Growth", "Welcome Deck 2016", "W16");
  }
}

module.exports = IncrementalGrowth;
