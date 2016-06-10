"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeatoftheSynod extends UnimplementedCard {
  constructor (game) {
    super(game, "Seat of the Synod", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = SeatoftheSynod;
