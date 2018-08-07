"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ManaShort extends UnimplementedCard {
  constructor (game) {
    super(game, "Mana Short", "World Championship Decks 2002", "WC02");
  }
}

module.exports = ManaShort;
