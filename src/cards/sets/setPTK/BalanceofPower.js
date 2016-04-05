"use strict";
const Constants = require ("../../../Constants");
const BalanceofPowerBase = require("../set8ED/BalanceofPower");

class BalanceofPower extends BalanceofPowerBase {
  constructor(game) {
    super(game, "Balance of Power", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = BalanceofPower;
