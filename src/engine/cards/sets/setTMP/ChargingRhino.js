"use strict";
const Constants = require ("../../../Constants");
const ChargingRhinoBase = require("../setBBD/ChargingRhino");

class ChargingRhino extends ChargingRhinoBase {
  constructor (game) {
    super(game, "Charging Rhino", "Tempest", "TMP");
  }
}

module.exports = ChargingRhino;
