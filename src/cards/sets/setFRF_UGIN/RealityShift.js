"use strict";
const Constants = require ("../../../Constants");
const RealityShiftBase = require("../setFRF/RealityShift");

class RealityShift extends RealityShiftBase {
  constructor (game) {
    super(game, "Reality Shift", "Ugin's Fate promos", "FRF_UGIN");
  }
}

module.exports = RealityShift;
