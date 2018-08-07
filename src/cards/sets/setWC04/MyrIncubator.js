"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MyrIncubator extends UnimplementedCard {
  constructor (game) {
    super(game, "Myr Incubator", "World Championship Decks 2004", "WC04");
  }
}

module.exports = MyrIncubator;
