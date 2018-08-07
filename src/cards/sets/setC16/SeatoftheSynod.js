"use strict";
const Constants = require ("../../../Constants");
const SeatoftheSynodBase = require("../setC18/SeatoftheSynod");

class SeatoftheSynod extends SeatoftheSynodBase {
  constructor (game) {
    super(game, "Seat of the Synod", "Commander 2016", "C16");
  }
}

module.exports = SeatoftheSynod;
