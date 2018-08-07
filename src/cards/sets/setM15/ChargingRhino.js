"use strict";
const Constants = require ("../../../Constants");
const ChargingRhinoBase = require("../setBBD/ChargingRhino");

class ChargingRhino extends ChargingRhinoBase {
  constructor (game) {
    super(game, "Charging Rhino", "Magic 2015", "M15");
  }
}

module.exports = ChargingRhino;
