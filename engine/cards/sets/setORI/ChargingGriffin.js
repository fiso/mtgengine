"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ChargingGriffinBase = require("../setM14/ChargingGriffin.js");

class ChargingGriffin extends ChargingGriffinBase {
  constructor(game) {
    super(game, "Charging Griffin", "Magic Origins", "ORI");
  }
}

module.exports = ChargingGriffin;
