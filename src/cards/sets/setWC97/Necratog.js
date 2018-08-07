"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Necratog extends UnimplementedCard {
  constructor (game) {
    super(game, "Necratog", "World Championship Decks 1997", "WC97");
  }
}

module.exports = Necratog;
