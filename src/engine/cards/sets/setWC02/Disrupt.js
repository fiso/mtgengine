"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Disrupt extends UnimplementedCard {
  constructor (game) {
    super(game, "Disrupt", "World Championship Decks 2002", "WC02");
  }
}

module.exports = Disrupt;
