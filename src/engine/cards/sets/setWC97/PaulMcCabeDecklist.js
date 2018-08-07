"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PaulMcCabeDecklist extends UnimplementedCard {
  constructor (game) {
    super(game, "Paul McCabe Decklist", "World Championship Decks 1997", "WC97");
  }
}

module.exports = PaulMcCabeDecklist;
