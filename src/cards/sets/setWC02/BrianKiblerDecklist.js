"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrianKiblerDecklist extends UnimplementedCard {
  constructor (game) {
    super(game, "Brian Kibler Decklist", "World Championship Decks 2002", "WC02");
  }
}

module.exports = BrianKiblerDecklist;
