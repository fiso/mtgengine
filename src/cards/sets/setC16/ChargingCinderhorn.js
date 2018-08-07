"use strict";
const Constants = require ("../../../Constants");
const ChargingCinderhornBase = require("../setPZ2/ChargingCinderhorn");

class ChargingCinderhorn extends ChargingCinderhornBase {
  constructor (game) {
    super(game, "Charging Cinderhorn", "Commander 2016", "C16");
  }
}

module.exports = ChargingCinderhorn;
