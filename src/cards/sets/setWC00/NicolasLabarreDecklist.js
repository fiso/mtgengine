"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NicolasLabarreDecklist extends UnimplementedCard {
  constructor (game) {
    super(game, "Nicolas Labarre Decklist", "World Championship Decks 2000", "WC00");
  }
}

module.exports = NicolasLabarreDecklist;
