"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Miscalculation extends UnimplementedCard {
  constructor (game) {
    super(game, "Miscalculation", "World Championship Decks 2000", "WC00");
  }
}

module.exports = Miscalculation;
