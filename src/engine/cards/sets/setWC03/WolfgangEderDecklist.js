"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WolfgangEderDecklist extends UnimplementedCard {
  constructor (game) {
    super(game, "Wolfgang Eder Decklist", "World Championship Decks 2003", "WC03");
  }
}

module.exports = WolfgangEderDecklist;
