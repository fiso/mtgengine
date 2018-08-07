"use strict";
const Constants = require ("../../../Constants");
const RealityShiftBase = require("../setC17/RealityShift");

class RealityShift extends RealityShiftBase {
  constructor (game) {
    super(game, "Reality Shift", "Magic Online Promos", "PRM");
  }
}

module.exports = RealityShift;
