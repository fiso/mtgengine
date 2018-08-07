"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ManuelBevandDecklist extends UnimplementedCard {
  constructor (game) {
    super(game, "Manuel Bevand Decklist", "World Championship Decks 2004", "WC04");
  }
}

module.exports = ManuelBevandDecklist;
