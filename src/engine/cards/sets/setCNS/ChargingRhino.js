"use strict";
const Constants = require ("../../../Constants");
const ChargingRhinoBase = require("../setBBD/ChargingRhino");

class ChargingRhino extends ChargingRhinoBase {
  constructor (game) {
    super(game, "Charging Rhino", "Conspiracy", "CNS");
  }
}

module.exports = ChargingRhino;
