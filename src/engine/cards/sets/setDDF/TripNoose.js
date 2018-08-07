"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TripNoose extends UnimplementedCard {
  constructor (game) {
    super(game, "Trip Noose", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = TripNoose;
