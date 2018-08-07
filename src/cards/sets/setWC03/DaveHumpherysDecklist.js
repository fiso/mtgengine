"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DaveHumpherysDecklist extends UnimplementedCard {
  constructor (game) {
    super(game, "Dave Humpherys Decklist", "World Championship Decks 2003", "WC03");
  }
}

module.exports = DaveHumpherysDecklist;
