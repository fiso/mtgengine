"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Replenish extends UnimplementedCard {
  constructor (game) {
    super(game, "Replenish", "World Championship Decks 2000", "WC00");
  }
}

module.exports = Replenish;
