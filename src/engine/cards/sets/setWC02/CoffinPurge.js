"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CoffinPurge extends UnimplementedCard {
  constructor (game) {
    super(game, "Coffin Purge", "World Championship Decks 2002", "WC02");
  }
}

module.exports = CoffinPurge;
