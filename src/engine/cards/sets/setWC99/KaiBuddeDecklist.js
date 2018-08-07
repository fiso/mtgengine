"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KaiBuddeDecklist extends UnimplementedCard {
  constructor (game) {
    super(game, "Kai Budde Decklist", "World Championship Decks 1999", "WC99");
  }
}

module.exports = KaiBuddeDecklist;
