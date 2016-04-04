"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ChargingTrollBase = require("../setDDE/ChargingTroll.js");

class ChargingTroll extends ChargingTrollBase {
  constructor(game) {
    super(game, "Charging Troll", "Invasion", "INV");
  }
}

module.exports = ChargingTroll;
