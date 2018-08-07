"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrianHackerDecklist extends UnimplementedCard {
  constructor (game) {
    super(game, "Brian Hacker Decklist", "World Championship Decks 1998", "WC98");
  }
}

module.exports = BrianHackerDecklist;
