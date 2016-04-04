"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SeatoftheSynodBase = require("../setDDF/SeatoftheSynod.js");

class SeatoftheSynod extends SeatoftheSynodBase {
  constructor(game) {
    super(game, "Seat of the Synod", "Mirrodin", "MRD");
  }
}

module.exports = SeatoftheSynod;
