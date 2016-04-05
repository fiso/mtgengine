"use strict";
const Constants = require ("../../../Constants");
const ReinsofPowerBase = require("../setC15/ReinsofPower");

class ReinsofPower extends ReinsofPowerBase {
  constructor(game) {
    super(game, "Reins of Power", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = ReinsofPower;
