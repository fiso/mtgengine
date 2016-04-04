"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RealityShiftBase = require("../setFRF/RealityShift.js");

class RealityShift extends RealityShiftBase {
  constructor(game) {
    super(game, "Reality Shift", "Ugin's Fate promos", "FRF_UGIN");
  }
}

module.exports = RealityShift;
