"use strict";
const Constants = require ("../../../Constants");
const ChargingTrollBase = require("../setDDE/ChargingTroll");

class ChargingTroll extends ChargingTrollBase {
  constructor (game) {
    super(game, "Charging Troll", "Invasion", "INV");
  }
}

module.exports = ChargingTroll;
