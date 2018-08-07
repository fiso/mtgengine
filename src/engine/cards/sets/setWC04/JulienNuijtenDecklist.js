"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JulienNuijtenDecklist extends UnimplementedCard {
  constructor (game) {
    super(game, "Julien Nuijten Decklist", "World Championship Decks 2004", "WC04");
  }
}

module.exports = JulienNuijtenDecklist;
