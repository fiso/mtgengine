"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KaiBuddeBio extends UnimplementedCard {
  constructor (game) {
    super(game, "Kai Budde Bio", "World Championship Decks 1999", "WC99");
  }
}

module.exports = KaiBuddeBio;
