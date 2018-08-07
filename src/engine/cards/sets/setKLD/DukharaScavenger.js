"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DukharaScavenger extends UnimplementedCard {
  constructor (game) {
    super(game, "Dukhara Scavenger", "Kaladesh", "KLD");
  }
}

module.exports = DukharaScavenger;
