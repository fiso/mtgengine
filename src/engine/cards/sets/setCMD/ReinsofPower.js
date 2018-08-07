"use strict";
const Constants = require ("../../../Constants");
const ReinsofPowerBase = require("../setC16/ReinsofPower");

class ReinsofPower extends ReinsofPowerBase {
  constructor (game) {
    super(game, "Reins of Power", "Commander 2011", "CMD");
  }
}

module.exports = ReinsofPower;
