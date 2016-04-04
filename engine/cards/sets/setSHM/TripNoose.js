"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TripNooseBase = require("../setDDF/TripNoose.js");

class TripNoose extends TripNooseBase {
  constructor(game) {
    super(game, "Trip Noose", "Shadowmoor", "SHM");
  }
}

module.exports = TripNoose;
