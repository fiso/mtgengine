"use strict";
const Constants = require ("../../../Constants");
const ReturntotheEarthBase = require("../setBBD/ReturntotheEarth");

class ReturntotheEarth extends ReturntotheEarthBase {
  constructor (game) {
    super(game, "Return to the Earth", "Fate Reforged", "FRF");
  }
}

module.exports = ReturntotheEarth;
