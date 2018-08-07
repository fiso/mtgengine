"use strict";
const Constants = require ("../../../Constants");
const SeatoftheSynodBase = require("../setC18/SeatoftheSynod");

class SeatoftheSynod extends SeatoftheSynodBase {
  constructor (game) {
    super(game, "Seat of the Synod", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = SeatoftheSynod;
