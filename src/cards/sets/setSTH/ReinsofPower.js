"use strict";
const Constants = require ("../../../Constants");
const ReinsofPowerBase = require("../setC16/ReinsofPower");

class ReinsofPower extends ReinsofPowerBase {
  constructor (game) {
    super(game, "Reins of Power", "Stronghold", "STH");
  }
}

module.exports = ReinsofPower;
