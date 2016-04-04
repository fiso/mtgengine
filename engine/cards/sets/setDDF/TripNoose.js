"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TripNoose extends Card {
  constructor(game) {
    super(game, "Trip Noose", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = TripNoose;
