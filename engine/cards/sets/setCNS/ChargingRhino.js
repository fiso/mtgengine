"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ChargingRhinoBase = require("../setM15/ChargingRhino.js");

class ChargingRhino extends ChargingRhinoBase {
  constructor(game) {
    super(game, "Charging Rhino", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = ChargingRhino;
