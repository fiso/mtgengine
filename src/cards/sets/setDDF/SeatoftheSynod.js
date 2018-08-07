"use strict";
const Constants = require ("../../../Constants");
const SeatoftheSynodBase = require("../setC18/SeatoftheSynod");

class SeatoftheSynod extends SeatoftheSynodBase {
  constructor (game) {
    super(game, "Seat of the Synod", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = SeatoftheSynod;
