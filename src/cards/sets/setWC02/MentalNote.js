"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MentalNote extends UnimplementedCard {
  constructor (game) {
    super(game, "Mental Note", "World Championship Decks 2002", "WC02");
  }
}

module.exports = MentalNote;
