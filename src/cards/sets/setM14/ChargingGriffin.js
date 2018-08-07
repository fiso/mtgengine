"use strict";
const Constants = require ("../../../Constants");
const ChargingGriffinBase = require("../setORI/ChargingGriffin");

class ChargingGriffin extends ChargingGriffinBase {
  constructor (game) {
    super(game, "Charging Griffin", "Magic 2014", "M14");
  }
}

module.exports = ChargingGriffin;
