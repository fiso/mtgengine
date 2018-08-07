"use strict";
const Constants = require ("../../../Constants");
const PressurePointBase = require("../setKLD/PressurePoint");

class PressurePoint extends PressurePointBase {
  constructor (game) {
    super(game, "Pressure Point", "Fate Reforged", "FRF");
  }
}

module.exports = PressurePoint;
