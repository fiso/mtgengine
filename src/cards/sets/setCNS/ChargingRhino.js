"use strict";
const Constants = require ("../../../Constants");
const ChargingRhinoBase = require("../setM15/ChargingRhino");

class ChargingRhino extends ChargingRhinoBase {
  constructor(game) {
    super(game, "Charging Rhino", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = ChargingRhino;
