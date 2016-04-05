"use strict";
const Constants = require ("../../../Constants");
const TripNooseBase = require("../setDDF/TripNoose");

class TripNoose extends TripNooseBase {
  constructor(game) {
    super(game, "Trip Noose", "Shadowmoor", "SHM");
  }
}

module.exports = TripNoose;
