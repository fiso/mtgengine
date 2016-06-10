"use strict";
const Constants = require ("../../../Constants");
const SeatoftheSynodBase = require("../setDDF/SeatoftheSynod");

class SeatoftheSynod extends SeatoftheSynodBase {
  constructor (game) {
    super(game, "Seat of the Synod", "Planechase", "HOP");
  }
}

module.exports = SeatoftheSynod;
