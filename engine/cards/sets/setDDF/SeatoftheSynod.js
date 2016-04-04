"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SeatoftheSynod extends Card {
  constructor(game) {
    super(game, "Seat of the Synod", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = SeatoftheSynod;
